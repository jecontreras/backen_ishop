/**
 * ArticuloCategoria.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    articulo: {
      model: 'articulo',
      required: true
    },
    categoria: {
      model: 'categoria',
      required: true
    }
  }

};

