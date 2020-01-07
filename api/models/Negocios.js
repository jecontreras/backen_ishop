/**
 * Negocios.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    galeria:{
      collection: 'galeria',
      via: 'negocios'
    },
    foto: {
      type: 'string',
      defaultsTo: "https://image.flaticon.com/icons/png/512/1509/1509607.png"
    },
    titulo: {
      type: "string"
    },
    descripcion: {
      type: "string"
    },
    pais:{
      type: "string"
    },
    megusta:{
      type: 'integer',
      defaultsTo: 0
    },
    coun_comentario:{
      type: 'integer',
      defaultsTo: 0
    },
    departamento:{
      type: "string"
    },
    estado:{
      type: 'string',
      enum:[
        'activo',
        'eliminado'
      ],
      defaultsTo: 'activo'
    },
    ciudad:{
      type: "string"
    },
    user:{
      model: 'user'
    },
    direccion:{
      type: "string"
    }
  }
};

