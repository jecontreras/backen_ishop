/**
 * Chatdetallado.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    articulo:{
      model: 'articulo'
    },
    chat: {
      model: 'chat',
      required: true
    },
    mensaje:{
      type: 'string',
      required: true
    },
    emisor: {
      model: 'user',
      required: true
    },
    reseptor:{
      model: 'user',
      required: true
    }
  },


};

