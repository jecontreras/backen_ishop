/**
 * CatalagoDetalle.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    catalogo:{
      model: 'catalago'
    },
    estado:{
      type: 'number',  //0 activo - 1 eliminado 
      defaultsTo: 0
    },
    producto:{
      model: 'productos'
    },
    foto:{
      type: 'string'
    },
    titulo:{
      type: 'string'
    },
    precios:{
      type: 'integer',
      defaultsTo: 0
    },
    promocion:{
      type: 'integer',
      defaultsTo: 10
    },
    comision:{
      type: 'integer'
    }

  },

};

