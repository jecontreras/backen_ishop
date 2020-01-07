/**
 * Galeria.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    titulo: {
      type: 'string',
      required:true
    },
    namefile:{
      type: 'string'
    },
    foto: {
      type: 'string',
      defaultsTo: "https://image.flaticon.com/icons/png/512/806/806656.png"
    },
    articulo:{
      model: 'articulo'
    },
    empresa:{
      model: 'empresa'
    },
    negocios:{
      model: 'negocios'
    },
    app:{
      model: 'app'
    },
    cart: {
      model: 'cart'
    },
    user: {
      model: 'user'
    }
  },

};

