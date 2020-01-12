/**
 * MenuController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
let Procedures = Object();
let mensajes = require('../data/menu');
Procedures.querys = async(req, res)=>{
    return res.ok({stats:200, mensaje: mensajes});
}
module.exports = Procedures;

