/**
 * Puntos.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    idPersonas:{
        model: 'personas',
        required: true
    },
    valorAnterior:{
        type: 'integer',
        required: true
    },
    valorEntrante:{
        type: 'integer',
        required: true
    },
    valorTotal:{
        type: 'integer',
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

