/**
 * Pagos.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombreVendedor:{
      type: 'string'
    },
    numeroWhatVendedor:{
      type: 'string'
    },
    documentoVendedor:{
      type: 'string'
    },
    idPersona: {
        model: 'personas',
        required:true
    },
    monto: {
        type: 'integer',
        required:true
    },
    detalle:{
        type: 'string'
    },
    estado:{
        type: 'number',  //0 activo - 1 completado // 2 -eliminado 3 -cancelado 4 novedad
        defaultsTo: 0
    },
    idBanco:{
        model: 'bancos',
        required:true
    }

  },

};

