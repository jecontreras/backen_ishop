/**
 * ProductoTallasController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

let Procedures = Object();

Procedures.find = async(req, res)=>{
    let params = req.allParams();
    let resultado = Object();
    resultado = await QuerysServices(ProductoTallas,params);
    return res.ok( { status: 200, ...resultado } );
}

module.exports = Procedures;