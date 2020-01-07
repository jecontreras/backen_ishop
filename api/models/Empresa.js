/**
 * Empresa.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    empresa:{
      type: 'string',
      unique: true,
      required: true
    },
    foto: {
      type: 'string',
      defaultsTo: 'data:image/png;base64,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'
    },
    url: {
      type: 'string',
      unique: true,
      required: true
    },
    ofrece:{
      type: 'string',
      required: true
    },
    direccion:{
      type: 'string'
    },
    codigo: {
      type: 'string',
      unique: true,
      required: true
    },
    estado:{
      type: 'string',
      enum: [
        'activo',
        'revisando',
        'inactivo'
      ],
      defaultsTo: 'activo'
    }
  }

};

