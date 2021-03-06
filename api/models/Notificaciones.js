/**
 * Notificaciones.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    idPersona:{
        model: 'personas'
    },
    contenido:{
        type: 'string'
    },
    url:{
        type: 'string'
    },
    estado:{
        type: 'number'  //0 activo - 1 eliminado 
    }

  },

};

