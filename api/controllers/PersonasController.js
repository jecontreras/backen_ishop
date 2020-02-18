/**
 * PersonasController
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
  if((params.password !== params.confirpassword) && (!params.username && !params.email && !params.cedula && !params.celular)) return res.ok({status: 400, data: "error en el envio de los datos"});
    //   Validando si existe  el usuario
  let user = await Personas.findOne({or : [{ username: params.username },{ email: params.email }]});
  if(user) return res.ok({status: 400, data: "error el username ya se encuentra registrado"});
    //   Validando la Contraseña
  let password = await Procedures.encryptedPassword(params.password);
  if(!password) return res.serverError("password Error");
  params.password = password;
    //   Codigo
  function codigo(){return (Date.now().toString(36).substr(2, 3) + Math.random().toString(36).substr(2, 2)).toUpperCase();}
    //   Rol
  let rol = await Roles.findOne({rol: params.rol || "usuario"});
  if(!rol) {
    rol = await Roles.create({rol: params.rol || "usuario",detalle: "rol del usuario"}).fetch();
    if(!rol) return res.ok({status: 400, data: "error al crear el rol"});
  }
  params.rol = rol.id;
  params.codigo = codigo();
  user = await Personas.create(params).fetch()
  user = await Personas.findOne({id: user.id}).populate('rol');
  if(!user) return res.badRequest(err);
  return res.ok({status: 200, data: user});
}

Procedures.encryptedPassword = (password) =>{
    return new Promise(resolve=>{
        Passwords.encryptPassword({
            password: password,
          }).exec({
            error: function (err){
              resolve(false)
            },
            success: function (password) {
              resolve(password);

            }
        });
    })

}

Procedures.login = async function(req, res){
    Personas.findOne({cedula: req.param('cedula')}).populate('rol').exec(function(err, user){
        if(err) return res.send({'success': false,'message': 'Peticion fallida','data': err});
        if(!user) return res.send({'success': false,'message': 'Usuario no encontrado','data': user});
        Passwords.checkPassword({
            passwordAttempt: req.param('password'),
            encryptedPassword: user.password,
            }).exec({
            error: function (err) {
                return res.send({'success': false,'message': 'Eror del servidor','data': err});
            },
            incorrect: function () {
                return res.send({'success': false,'message': 'Contraseña incorrecta'});
            },
            success: function () {
                user.password = '';
                sails.log('User '+ user.id +' has logged in.');
                return res.send({
                'success': true,
                'message': 'Peticion realizada',
                'data': user
                });

            },
            });
        })
}

Procedures.querys = async(req, res)=>{
    let params = req.allParams();
    let resultado = Object();
    resultado = await QuerysServices(Personas,params);
    return res.ok( { status: 200, ...resultado } );
}


module.exports = Procedures;