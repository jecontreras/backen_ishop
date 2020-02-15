/**
 * Calificaciones.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    idPersona:{
        model:'personas'
    },
    idProducto:{
        model: 'productos'
    },
    idComentario:{
        model: 'comentarios'
    },
    estado:{
        type: 'number'  //0 activo - 1 eliminado 
    }

  },

};

