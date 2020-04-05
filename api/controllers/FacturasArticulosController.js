/**
 * FacturasArticulosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

let Procedures = Object();

Procedures.querys = async(req, res)=>{
    let params = req.allParams();
    let resultado = Object();
    resultado = await QuerysServices(FacturasArticulos,params);
    for(let row of resultado.data){
    	row.producto = await Productos.findOne({id: row.producto});
    	if(row.producto) row.producto.foto = [ row.producto.image ];
    }
    return res.ok( { status: 200, ...resultado } );
}

module.exports = Procedures;

