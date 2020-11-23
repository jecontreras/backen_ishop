/**
 * CatalagoDetalleController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

let Procedures = Object();

Procedures.querys = async(req, res)=>{
    let params = req.allParams();
    let resultado = Object();
    resultado = await QuerysServices(CatalagoDetalle,params);
    for(let row of resultado.data){
    	row.catalogo = await Catalago.findOne({id: row.catalogo});
    }
    return res.ok( { status: 200, ...resultado } );
}

module.exports = Procedures;