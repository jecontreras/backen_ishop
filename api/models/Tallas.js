/**
 * Tallas.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre:{
        type: 'number'
    },
    detalle:{
        type: 'string'
    },
    estado:{
        type: 'number',  //0 activo - 1 eliminado 
        defaultsTo: 0
    },
    tal_tipo:{
        model: 'Tbltipotalla'
    },

  },

};

