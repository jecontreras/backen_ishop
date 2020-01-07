/**
 * Notificacion.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    foto: {
      type: 'string',
      defaultsTo: "https://image.flaticon.com/icons/png/512/1509/1509607.png"
    },
    titulo: {
      type: 'string'
    },
    emisor: {
      model: 'user'
    },
    reseptor: {
      model: 'user',
      required: true
    },
    articulo: {
      model: 'articulo'
    },
    tipo: {
      type: 'string',
      enum:[
        'chat',
        'avisos'
      ],
      required: true
    },
    descripcion:{
      type: 'string'
    }
  },

};

