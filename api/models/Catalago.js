/**
 * Catalago.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    estado:{
      type: 'number',  //0 activo - 1 eliminado 
      defaultsTo: 0
    },
    foto:{
      type: 'string'
    },
    url:{
      type: 'string'
    },
    titulo:{
      type: 'string'
    },
    precios:{
      type: 'integer'
    },
    promocion:{
      type: 'integer',
      defaultsTo: 0
    },
    comision:{
      type: 'integer',
      defaultsTo: 10
    }

  },

};

