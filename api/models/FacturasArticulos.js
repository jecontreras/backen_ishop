/**
 * FacturasArticulos.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    factura:{
        model: 'facturas',
        required: true
    },
    precio:{
        type: 'integer',
        required: true
    },
    cantidad:{
      type: 'integer',
      required: true
    },
    descripcion:{
        type: 'string'
    },
    producto:{
        model: 'productos',
        required: true
    }

  },

};

