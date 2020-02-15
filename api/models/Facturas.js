/**
 * Facturas.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    idProducto:{
        model: 'productos',
        required: true
    },
    idCliente:{
        model: 'personas',
        required: true
    },
    idVendedor:{
        model: 'personas'
    },
    estado:{
        type: 'number'  //0 activo - 1 eliminado 
    }
  },

};

