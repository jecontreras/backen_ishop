/**
 * ProductosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

let Procedures = Object();
var crypto = require("crypto");

Procedures.querys = async (req, res) => {
    let params = req.allParams();
    let resultado = Object();

    resultado = await QuerysServices(Productos, params);
    for (let row of resultado.data) {
        row.idEmpresa = await Empresas.findOne({ id: row.idEmpresa });
        row.foto = row.image;
        row.files = [ row.image ];
    }

    return res.ok({ status: 200, ...resultado });
}

Procedures.upload = async (req, res) => {
    try {
        console.log(req.allParams());
        let params = JSON.parse(req.allParams().producto);
        if (!params.idEmpresa) {
            params.idEmpresa = 1;
        }
        let nombreImagen = crypto.randomBytes(20).toString('hex');
        req.file('fileKey0').upload({
            dirname: require('path').resolve(sails.config.appPath, 'assets/images/productos'),
            saveAs: nombreImagen + '.jpg'
        }, (err, uploadedFiles) => {
            if (err) return res.ok({ status: 500, error: error });
            if(uploadedFiles.length < 1)  return res.ok({ status: 500, msg: 'no se ha cargado la iamgen' });
            params.image = nombreImagen + '.jpg';
            console.log(params);
            Productos.create(params).fetch().exec(
                (error, responsePro) => {
                    if (error) {
                        return res.ok({ status: 500, error: error });
                    }
                    Multimedia.create({
                        recurso: (nombreImagen + '.jpg'),
                        producto: responsePro.id,
                        estado: 0
                    }).fetch().exec(
                        (error, responseMul) => {
                            if (error) {
                                return res.ok({ status: 500, error: error });
                            }
                            ProductosMultimedia.create({
                                idProducto: responsePro.id,
                                idMultimedia: responseMul.id,
                                estado: 0
                            }).fetch().exec(
                                (error, responseProdMul) => {
                                    if (error) {
                                        sails.log({ status: 500, error: error });
                                        return res.ok(error);
                                    }
                                    sails.log(responseProdMul);
                                    return res.ok({ multimedia: responseMul, productos: responsePro, proMult: responseProdMul });
                                })
                        }
                    )
                }
            )
        });
    } catch (error) {
        sails.log(error);
        res.ok({ status: 500, error: error });
    }
}



module.exports = Procedures;