/**
 * Roles.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    rol:{
        type: 'string',
        required: true
    },
    detalle:{
        type: 'string'
    },
    estado:{
        type: 'number',  //0 activo - 1 eliminado 
        required: true
    },

  },

};

