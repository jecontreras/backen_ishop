/**
 * ResumenPersona.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    //la cantidad de ventas totales exitosas
    cantidadVentasTotales:{
      type: 'integer',
      defaultsTo: 0
    },
    // las ganancias totales exitosas
    gananciasVentasTotales:{
      type: 'integer',
      defaultsTo: 0
    },
    // ganancias faltante de ventas pendiente
    ventasEntregadasDetalles:{
      type: 'integer',
      defaultsTo: 0
    },

    // la cantidad de ventas pediente
    ganaciasVentasDetalles:{
      type: 'integer',
      defaultsTo: 0
    },
    //ganancias total de ventas pendientes
    valanceGanarDetalles:{
      type: 'integer',
      defaultsTo: 0
    },
    // cantidad de ventas totales tanto pendiente y completado o otro estado execto eliminada
    ventasEntregarComision:{
      type: 'integer',
      defaultsTo: 0
    },
    // ganancias de ventas totales tanto pendiente y completado o otro estado execto eliminada
    gananciasVentasComision:{
      type: 'integer',
      defaultsTo: 0
    },

    // cobros cobrados -------------------
    cobrosCobrados:{
      type: 'integer',
      defaultsTo: 0
    },

    // valor anterior de mi dinero total
    valorAnterior:{
      type: 'integer',
      defaultsTo: 0
    },
    // valor entrar a mi cuenta
    valorEntrante:{
      type: 'integer',
      defaultsTo: 0
    },
    // valor total de mi cuenta
    valorTotal:{
      type: 'integer',
      defaultsTo: 0
    },
    // 0 entrando 1 sacando
    tipoEntrada:{
      type: 'integer',
      defaultsTo: 0
    },
    idPersona:{
      model: 'personas',
      required: true
    },
    // 0 activo 1 Eliminado
    estado: {
      type: 'integer',
      defaultsTo: 0
    },
    ordenando:{
      type: 'integer',
      defaultsTo: 0
    }


  },

};

