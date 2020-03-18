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
        row.files = ["./assets/product.jpg"];
    }

    return res.ok({ status: 200, ...resultado });
}

Procedures.upload = async (req, res) => {
    let params = JSON.parse(req.allParams().producto);
    let response = Object();
    console.log(params);
    if (!params.idEmpresa) {
        params.idEmpresa = 1;
    }
    let nombreImagen = crypto.randomBytes(20).toString('hex');
    /* Productos.create(params).fetch().exec(
        (error, responsePro) => {
            if (error) {
                return res.ok(error);
            }
            sails.log(responsePro);
        }); */
    /* ProductosMultimedia.create({
        idProducto: 2,
        idMultimedia: 1,
        estado: 0
    }).exec(
        (response, error) => {
            if (error) {
                sails.log("esta en el error")
                sails.log(error);
                return res.ok(error);
            }
            sails.log(error);
            sails.log("aqui esta el indefinido")
            sails.log(response);
            return res.ok({data: response});
        }); */
    req.file('fileKey0').upload({
        dirname: require('path').resolve(sails.config.appPath, 'assets/images/productos'),
        saveAs: nombreImagen + '.jpg'
    }, (err, data) => {
        if (err) return res.ok(error);
        Multimedia.create({
            recurso: (nombreImagen + '.jpg'),
            estado: 0
        }).fetch().exec(
            (error, responseMul) => {
                if (error) {
                    return res.ok(error);
                }
                Productos.create(params).fetch().exec(
                    (error, responsePro) => {
                        if (error) {
                            return res.ok(error);
                        }
                        sails.log("llego hasta crear el join");
                        ProductosMultimedia.create({
                            idProducto: responsePro.id,
                            idMultimedia: responseMul.id,
                            estado: 0
                        }).fetch().exec(
                            (error, responseProdMul) => {
                                if (error) {
                                    sails.log(error);
                                    return res.ok(error);
                                }
                                sails.log(responseProdMul);
                                return res.ok({multimedia: responseMul, productos: responsePro, proMult: responseProdMul});
                            })
                    }
                )
            }
        )
    });

    /* if(response.img1) {
        
    } else {
        response.msg = 'la peticion no trae imagen de producto';
    }
    
    return res.ok( { status: 200, ...response } ); */
},



    module.exports = Procedures;

 /* if (req.file('fileKey0')) response.img1 = await UploadService(req.file('fileKey0')); */
    /* if(req.file('fileKey1')) response.img2 = await UploadService(req.file('fileKey1'));
    if(req.file('fileKey2')) response.img3 = await UploadService(req.file('fileKey2'));
    if(req.file('fileKey3')) response.img4 = await UploadService(req.file('fileKey3'));
    if(req.file('fileKey4')) response.img5 = await UploadService(req.file('fileKey4')); */