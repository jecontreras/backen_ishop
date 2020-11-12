/**
 * Puntos.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    idPersona:{
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
    tipoEntrada:{
        type: 'integer',
        defaultsTo: 0 // 0 entrada 1 salida
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
        defaultsTo: 0
    },
    ordenando:{
        type: 'integer',
        required: true
    },
    factura:{
        model: 'facturas'
    }

  },

};

