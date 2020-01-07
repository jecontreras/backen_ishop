/**
 * Comentario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    comentario:{
      type: 'string'
    },
    estado:{
      type: 'string',
      enum:[
        'activo',
        'eliminado'
      ],
      defaultsTo: 'activo'
    },
    opcion:{
      type: 'string',
      enum:[
        'like',
        'comentar'
      ],
      required: true
    },
    coun_comentario:{
      type: 'integer',
      defaultsTo: 0
    },
    megusta:{
      type: 'integer',
      defaultsTo: 0
    },
    negocios: {
      model: 'negocios'
    },
    articulo:{
      model: 'articulo'
    },
    user:{
      model: 'user',
      required: true
    }
  },
  async beforeCreate(values, next){
    let resultado               = Object();
    resultado = await Negocios.find({where: {id: values.negocios}});
    if(Object.keys(resultado).length ===0 ) return next();
    else {
      resultado = resultado[0];
      let megusta = Number(resultado.megusta || 0)+1;
      let coun_comentario = Number(resultado.coun_comentario || 0)+1;
      resultado = await Negocios.update({
        id: resultado.id
      }, { coun_comentario: coun_comentario,  megusta: megusta});
    }
    next();
  }
};

