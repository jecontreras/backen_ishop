/**
 * CategoriaUser.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    user:{
      model: 'user'
    },
    categoria:{
      model: 'categoria'
    },
    estado:{
      type: 'string',
      enum:[
        'activo',
        'eliminado'
      ],
      defaultsTo: 'activo'
    },

  },

};

