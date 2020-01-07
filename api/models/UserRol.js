/**
 * UserRol.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    usuario: {
      model: 'user',
      required: true
    },
    rol: {
      model: 'rol',
      required: true
    }

  },

};

