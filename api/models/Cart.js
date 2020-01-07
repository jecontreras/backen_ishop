/**
 * Cart.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    user: {
      model: 'user',
      required: true
    },
    cantidad: {
      type: 'integer',
      defaultsTo: 0
    },
    total: {
      type: 'integer',
      defaultsTo: 0
    },
    cartpago:{
      type: 'string'
    },
    subtotal: {
      type: 'integer',
      defaultsTo: 0
    },
    estado: {
      type: 'string',
      enum: [
        'activo',
        'pendiente',     
        'enviado',
        'completado',
        'eliminado',
        'rechazado'
      ],
      defaultsTo: "pendiente"
    },
    ciudad:{
      type: 'string',
      required: true
    },
    codigo:{
      type: 'string',
      required: true
    },
    codigoglobal: {
      type: 'string',
    },
    valorentrega: {
      type: 'integer',
      required: true
    },
    fechaentrega: {
      type: 'string',
      required: true
    },
    fechamaxima: {
      type: 'string'
    },
    costoenvio: {
      type: 'integer',
      required: true
    },
    empresa: {
      model: "empresa"
    },
    pais:{
      type: 'string'
    },
    provivencia:{
      type: 'string',
      required: true
    },
    direccion1:{
      type: 'string',
      required: true
    },
    direccion2:{
      type: 'string'
    },
    descuento: {
      type: 'integer',
      defaultsTo: 0
    },
    codigopostal:{
      type: 'string',
      required: true
    },
    terminocondicione:{
      type: 'boolean'
    },
    suscribete: {
      type: 'boolean'
    }
  }

};

