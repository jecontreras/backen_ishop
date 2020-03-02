/**
 * Facturas.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    idCliente:{
        model: 'personas',
        required: true
    },
    idVendedor:{
        model: 'personas',
        required: true
    },
    estado:{
        type: 'number',  //0 activo - 1 eliminado 
        defaultsTo: 0
    },
    codigo:{
        type: 'string',
        required: true
    },
    precio:{
        type: 'integer',
        defaultsTo: 0
    }
  },

};

