/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const Passwords = require('machinepack-passwords');

let Procedures = Object();

Procedures.register = async(req, res)=>{
    let
        params = req.allParams()
    ;
  // sails.log.info(26, params);
  if((params.password !== params.confirpassword) && (!params.username && !params.email)) return res.ok({status: 400, mensaje: "error en el envio de los datos"});
    //   Validando si existe  el usuario
  let user = await User.findOne({where:{username: params.username}});
  if(user) return res.ok({status: 400, mensaje: "error el username ya se encuentra registrado"});
    //   Validando la Contraseña
  let password = await Passwords.encryptPassword({password: params.password});
  if(!password) return res.serverError(err);
  params.password = password;
    //   Codigo
  function codigo(){return (Date.now().toString(36).substr(2, 3) + Math.random().toString(36).substr(2, 2)).toUpperCase();}
    //   Rol
  let rol = await Rol.findOne({nombre: params.rol || "usuario"});
  if(rol) {
    rol = await Rol.create({nombre: params.rol || "usuario",descripcion: "rol del usuario"});
    if(!rol) rol = await Rol.findOne({nombre: params.rol || "usuario"});
    if(!rol) return res.ok({status: 400, mensaje: "error al crear el rol"});
  }
  params.rol = rol.id;
  params.codigo = codigo();
  user = await User.create(params);
  user = await User.findOne({email: params.email}).populate('rol').populate("empresa");
  if(!user) return res.badRequest(err);
  return res.ok({status: 200, mensaje: rta});
}

Procedures.login = async(req, res)=>{
    let param = req.allParams();
    let resulado = Object();
    // Buscando el usuario
    resulado = await User.findOne({where:{email: param.email}}).populate("rol").populate("empresa");
    if(!resulado) return res.send({'success': false,'mensaje': 'Usuario no encontrado','data': user});
    // chequiando el password
    let password = await Passwords.checkPassword({passwordAttempt: param.password,encryptedPassword: user.password,});
    if(!password) return res.send({'success': false,'mensaje': 'Contraseña incorrecta'});
    user.password = '';
    return res.send({
    'success': true,
    'mensaje': 'Peticion realizada',
    'data': user
    });
}


module.exports = Procedures;

