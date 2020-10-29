/**
 * ResumenPersona.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    cantidadVentasTotales:{
      type: 'integer',
      defaultsTo: 0
    },
    gananciasVentasTotales:{
      type: 'integer',
      defaultsTo: 0
    },
    
    ventasEntregadasDetalles:{
      type: 'integer',
      defaultsTo: 0
    },
    ganaciasVentasDetalles:{
      type: 'integer',
      defaultsTo: 0
    },
    valanceGanarDetalles:{
      type: 'integer',
      defaultsTo: 0
    },
    
    ventasEntregarComision:{
      type: 'integer',
      defaultsTo: 0
    },
    gananciasVentasComision:{
      type: 'integer',
      defaultsTo: 0
    },


    valorAnterior:{
      type: 'integer',
      defaultsTo: 0
    },
    valorEntrante:{
      type: 'integer',
      defaultsTo: 0
    },
    valorAnterios:{
      type: 'integer',
      defaultsTo: 0
    },
    idPersona:{
      model: 'personas',
      required: true
    }


  },

};

