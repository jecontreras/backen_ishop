/**
 * Mensajes.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    idMensaje:{
        model: 'mensajes'
    },
    idEmisor:{
        model: 'personas'
    },
    remitente:{
        model: 'personas'
    },
    estado:{
        type: 'number'  //0 activo - 1 eliminado 
    },
    detalle:{
        type: 'string'
    }

  },

};

