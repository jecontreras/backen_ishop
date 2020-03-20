/**
 * Productos.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    titulo:{
        type: 'string',
        required: true
    },
    slug: {
        type: 'string',
        required: true
    },
    idSubCategoria: {
        model: 'subcategoria',
        required: true
    },
    idEmpresa: {
        model: 'empresas'
    },
    cantidad:{
        type: 'integer',
        defaultsTo: 0
    },
    precioVenta:{
        type: 'integer',
        defaultsTo: 0
    },
    precioCompra:{
        type: 'integer',
        defaultsTo: 0
    },
    precioOferta:{
        type: 'integer',
        defaultsTo: 0
    },
    detalle:{
        type: 'string'
    },
    subasta: {
        type: 'boolean'
    },
    idPeso: {
        model: 'pesos'
    },
    marca: {
        model: 'marca'
    },
    genero: {
        model: 'generos' 
    },
    image: {
        type: 'string',
        defaultsTo: 'default.jpg'
    },
    image_galery: {
        collection: 'multimedia',
        via: 'producto'
    },
    rating: {
        type: 'string',
        defaultsTo: '5'
    },
    estado:{
        type: 'number',  //0 activo - 1 eliminado 
        defaultsTo: 0
    }

  },

};

