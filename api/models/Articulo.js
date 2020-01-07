/**
 * Articulo.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    foto: {
      type: 'string',
      defaultsTo: 'http://localhost:1337/images/product.jpg'
    },
    foto2: {
      type: 'string',
      defaultsTo: 'http://localhost:1337/images/product.jpg'
    },
    empresa:{
      model: 'empresa',
      // required: true
    },
    user: {
      model: 'user'
    },
    codigo: {
      type: 'string',
      required: true
    },
    titulo:{
      type: 'string',
      required: true
    },
    slug: {
      type: 'string',
      required: true
    },
    tipo:{
      type: 'string',
      enum:[
        'producto',
        'servicio'
      ],
      defaultsTo: 'producto'
    },
    subasta:{
      type: 'boolean',
      defaultsTo: false
    },
    megusta:{
      type: 'integer',
      defaultsTo: 0
    },
    costocomision:{
      type: 'integer',
      defaultsTo: 0
    },
    costovarios: {
      type: 'boolean',
      defaultsTo: false
    },
    listatallas:{
      type: 'json',
    },
    listapromosion: {
      type: 'json',
    },
    nomegusta:{
      type: 'integer',
      defaultsTo: 0
    },
    vistos:{
      type: 'integer',
      defaultsTo: 0
    },
    compartidos: {
      type: 'integer',
      defaultsTo: 0
    },
    cantidad:{
      type: 'integer',
      defaultsTo: 0
    },
    stock:{
      type: 'integer',
      defaultsTo: 0
    },
    peso:{
      type: 'integer',
      defaultsTo: 0
    },
    estado:{
      type: 'string',
      enum:[
        'nuevo',
        'usado'
      ],
      defaultsTo: 'nuevo'
    },
    opcion:{
      type: 'string',
      enum:[
        'activo',
        'revisando',
        'rechazado',
        'inactivo'
      ],
      defaultsTo: 'activo'
    },
    costocompra:{
      type: 'integer',
      defaultsTo: 0
    },
    costopromosion:{
      type: 'integer',
      defaultsTo: 0
    },
    porcentajedes:{
      type: 'integer',
      defaultsTo: 0
    },
    talla: {
      type: 'string'
    },
    color: {
      type: 'string'
    },
    marca: {
      model: 'marca'
    },
    categorias: {
      model: 'categoria'
    },
    costoventa:{
      type: 'integer',
      defaultsTo: 0
    },
    fechavencimiento:{
      type: 'string'
    },
    alto:{
      type: 'integer',
      defaultsTo: 0
    },
    largo:{
      type: 'integer',
      defaultsTo: 0
    },
    ancho:{
      type: 'integer',
      defaultsTo: 0
    },
    descripcion:{
      type: 'string'
    },
    list_informacion: {
      type: 'json'
    },
    list_envios: {
      type: 'json'
    },
  }
};

