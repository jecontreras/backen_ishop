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
    let allParams = req.allParams();     
    let response = Object();
    response.img1 = await UploadService(req.file('fileKey0'));
    response.img2 = await UploadService(req.file('fileKey1'));
    response.img3 = await UploadService(req.file('fileKey2'));
    response.img4 = await UploadService(req.file('fileKey3'));
    response.img5 = await UploadService(req.file('fileKey4'));
    return res.ok( { status: 200, ...response } );
},



module.exports = Procedures;

