/**
 * Cartarticulo.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    articulo:{
      model: 'articulo',
      required: true
    },
    cart: {
      model: 'cart',
      required: true
    },
    cantidad: {
      type: 'integer',
      required: true
    },
    valor: {
      type: 'integer',
      required: true
    },
    empresa: {
      model: 'empresa',
      required: true
    },
    valordescuento:{
      type: 'integer',
      defaultsTo: 0
    },
    color: {
      type: 'string'
    },
    talla: {
      type: 'string'
    },
  },

};

