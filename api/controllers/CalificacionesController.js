/**
 * CalificacionesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

let Procedures = Object();

Procedures.querys = async(req, res)=>{
    let params = req.allParams();
    let resultado = Object();
    resultado = await QuerysServices(Calificaciones,params);
    for(let row of resultado.data){
    	row.idPersona = await Personas.findOne({id: row.idPersona});
    	row.idComentario = await Comentarios.findOne({ id: row.idComentario});
    }
    return res.ok( { status: 200, ...resultado } );
}

Procedures.create = async(req, res)=>{
	let params = req.allParams();
    let resultado = Object();
    params.idComentario = await Procedures.createComentario(params.idComentario);
    resultado = await Calificaciones.create(params).fetch();
    if(!resultado) return res.ok( { status: 400, data:"Error al crear" } );
    return res.ok( { status: 200, data: resultado } );

}

Procedures.createComentario = async(data)=>{
	let resultado = Object();
	resultado = await Comentarios.create(data).fetch();
	return resultado.id;
}

module.exports = Procedures;
