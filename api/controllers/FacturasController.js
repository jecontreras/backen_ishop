/**
 * FacturasController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

let Procedures = Object();

Procedures.querys = async(req, res)=>{
    let params = req.allParams();
    let resultado = Object();
    resultado = await QuerysServices(Facturas,params);
    for(let row of resultado.data){
    	row.idCliente = await Personas.findOne({id: row.idCliente});
    	row.idVendedor = await Personas.findOne({id: row.idVendedor});
    	row.productos = await FacturasArticulos.find({factura: row.id}).populate('producto');
    }
    return res.ok( { status: 200, ...resultado } );
}

module.exports = Procedures;