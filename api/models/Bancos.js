/**
 * Bancos.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    titulo: {
        type: 'string'
    },
    detalle:{
        type: 'string'
    },
    estado:{
        type: 'number',  //0 activo - 1 eliminado
        defaultsTo: 0,
    }

  },

};

