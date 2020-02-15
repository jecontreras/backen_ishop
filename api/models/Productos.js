/**
 * Productos.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    idSubCategoria: {
        model: 'subcategoria',
        required: true
    },
    idEmpresa: {
        model: 'empresas',
        required: true
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
    ofertas: {
        type: 'integer'
    },
    subasta: {
        type: 'boolean'
    },
    idPeso: {
        model: 'pesos'
    },
    estado:{
        type: 'number'  //0 activo - 1 eliminado 
    },

  },

};

