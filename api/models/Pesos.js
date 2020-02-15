/**
 * Pesos.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    valor: {
        type: 'integer',
        required: true
    },
    cantidad:{
        type: 'integer',
        required: true
    },
    estado:{
        type: 'number'  //0 activo - 1 eliminado 
    },

  },

};

