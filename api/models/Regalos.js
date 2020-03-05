/**
 * Regalos.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    titulo: {
        type: 'string'
    },
    subtitulo: {
        type: 'string'
    },
    foto: {
        type: 'string'  
    },
    descripcion: {
        type: 'string'  
    }

  },

};

