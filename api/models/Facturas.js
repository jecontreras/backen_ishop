/**
 * Facturas.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    idCliente:{
        model: 'clientes',
        required: true
    },
    idVendedor:{
        model: 'personas',
        required: true
    },
    estado:{
        type: 'number',  //0 proceso- 1 completado 2 Eliminado 3 Cancelado 4 Novedad 5 Enviado 
        defaultsTo: 0
    },
    codigo:{
        type: 'string',
        required: true
    },
    precio:{
        type: 'integer',
        defaultsTo: 0
    },
    comision:{
        type: 'integer',
        defaultsTo: 0
    },
    ciudadCliente:{ 
        type: 'string',
        required: true
    },
    emailCliente:{
        type: 'string',
    },
    cedulaCliente:{
        type: 'string',
        required: true
    },
    numeroCliente:{
        type: 'string',
        required: true
    },
    barrioCliente:{
        type: 'string'
    },
    emailVendedor:{
        type: 'string',
    },
    cedulaVendedor:{
        type: 'string',
        required: true
    },
    direccionCliente:{
        type: 'string',
    },
    fecha_pedido:{
        type: 'string',
        required: true
    },
    detalles:{
        type: 'string'
    },
    idRemesa:{
        type: 'string'
    },
    empresaTrans:{
        type: 'string'
    }

  },

};

