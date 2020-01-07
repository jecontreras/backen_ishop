/**
 * Chat.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    emisor: {
      model: 'user',
      required: true
    },
    reseptor: {
      model: 'user',
      required: true
    },
    articulo: {
      model: 'articulo'
    },
    mensaje:{
      type: 'string'
    },
    estado:{
      type: 'string',
      enum:[
        'visto',
        'noVisto'
      ],
      defaultsTo: 'noVisto'
    }
  },

};

