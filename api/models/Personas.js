/**
 * Personas.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    rol:{
        model: 'roles',
        required: true
    },
    idBanco:{
        model: 'bancos'
    },
    conteoPuntos:{
        type: 'integer',
        defaultsTo: 0
    },
    idToken:{
        type: 'string'
    },
    idGenero:{
        model: 'generos'
    },
    idCiudad:{
        model: 'ciudad'
    },
    cedula:{
        type: 'string',
        required: true
    },
    email:{
        type: 'string',
        required: true
    },
    password:{
        type: 'string',
        required: true
    },
    username:{
        type: 'string',
        required: true
    },
    idFoto:{
        type: 'string'
    },
    estado:{
        type: 'number'  //0 activo - 1 eliminado 
    }

  },

};

