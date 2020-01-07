/**
 * Archivo.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    foto: {
      type: 'string',
      defaultsTo: "https://publi-click.herokuapp.com/images/chico.png" 
    },
    namefile:{
      type: 'string'
    },
    infodrive: {
      type: 'json'
    },
    foto64:{
      type: 'string'
    },
    galeria: {
      model: 'galeria'
    },
    archivo:{
      model: 'archivo'
    }
  },


};

