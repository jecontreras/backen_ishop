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
    producto:{
        model: 'productos',
        required: true
    }

  },

};

