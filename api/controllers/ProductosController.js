/**
 * ProductosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

let Procedures = Object();

Procedures.querys = async(req, res)=>{
    let params = req.allParams();
    let resultado = Object();
    resultado = await QuerysServices(Productos,params);
    for(let row of resultado.data){
    	row.idEmpresa = await Empresas.findOne({id: row.idEmpresa});
    	row.files = ["./assets/product.jpg"];
    }

    return res.ok( { status: 200, ...resultado } );
}

module.exports = Procedures;

