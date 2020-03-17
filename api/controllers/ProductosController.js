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

    resultado = await QuerysServices(Productos,params);
    for(let row of resultado.data){
    	row.idEmpresa = await Empresas.findOne({id: row.idEmpresa});
    	row.files = ["./assets/product.jpg"];
    }

    return res.ok( { status: 200, ...resultado } );
}

Procedures.upload = async (req, res) => {
    let params = req.allParams();     
    let response = Object();
    if(req.file('fileKey0')) response.img1 = await UploadService(req.file('fileKey0'));
    if(req.file('fileKey1')) response.img2 = await UploadService(req.file('fileKey1'));
    if(req.file('fileKey2')) response.img3 = await UploadService(req.file('fileKey2'));
    if(req.file('fileKey3')) response.img4 = await UploadService(req.file('fileKey3'));
    if(req.file('fileKey4')) response.img5 = await UploadService(req.file('fileKey4'));

    if(response.img1) {
        Productos.create(params.producto).exec(
            (error, responsePro) => {
                if(error) return res.ok(error);
                Multimedia.create({
                    recurso: response.img1,
                    estado: 0
                }).exec(
                    (error, responseMulti) => {
                        if(error) return res.ok(error);
                        ProductosMultimedia.create({
                            idProducto: responsePro.id,
                            idMultimedia: responseMulti.id,
                            estado: 0
                        }).exec(
                            (error, responseJoin) => {
                                if(error) return res.ok(error);
                                return res.ok({responseJoin});
                            }
                        )
                    }
                )
            }
        );
    } else {
        res.ok({msg: 'la peticion no trae imagen de producto'});
    }
    
    return res.ok( { status: 200, ...response } );
},



module.exports = Procedures;

