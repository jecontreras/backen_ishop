/**
 * Marca.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    marca: {
      type: 'string',
      required: true
    },
    foto: {
      type: 'string',
      defaultsTo: "./assets/imagenes/categoria.jpeg"
    },
    estado:{
      type: 'string',
      enum:[
        'activo',
        'eliminado'
      ],
      defaultsTo: 'activo'
    },
    slug: {
      type: 'string',
      required: true
    },
    descripcion:{
      type: 'string'
    },
    categoriaDe:{
      type: 'string',
      enum: [
        'etiqueta',
        'producto',
        'marca'
      ],
      defaultsTo: 'producto'
    }
  }

};

