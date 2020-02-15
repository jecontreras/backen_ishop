/**
 * MenuController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
let Procedures = Object();
let mensajes = require('../data/menu');
Procedures.querys = async(req, res)=>{
	let resultado = Object();
	resultado = {
		menu1: mensajes,
		menu2: mensajes,
		menu3: mensajes
	};
    return res.ok({stats:200, data: resultado});
}
module.exports = Procedures;

