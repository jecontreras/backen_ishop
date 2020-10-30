/**
 * Clientes.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    cedula:{
        type: 'string',
        required: true
    },
    email:{
        type: 'string',
        required: true
    },
    nombre:{
        type: 'string',
        required: true  
    },
    apellido:{
        type: 'string',
        required: true  
    },
    celular:{
        type: 'string',
        required: true  
    },
    idFoto:{
        type: 'string'
    },
    estado:{
        type: 'number',  //0 activo - 1 eliminado 
        defaultsTo: 0
    },
    direccion:{
        type: 'string'
    },
    barrioCliente:{
        type: 'string'
    }

  },

};

