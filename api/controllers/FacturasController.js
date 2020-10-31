/**
 * FacturasController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

let Procedures = Object();
let EstadosList = ["En Proceso", 'Completado', 'Eliminado', 'Cancelado', 'Novedad', 'Enviando'];
const _ = require('lodash');

Procedures.querys = async(req, res)=>{
    let params = req.allParams();
    let resultado = Object();
    resultado = await QuerysServices(Facturas,params);
    for(let row of resultado.data){
    	row.idCliente = await Clientes.findOne({id: row.idCliente});
    	row.idVendedor = await Personas.findOne({id: row.idVendedor});
        row.productos = await FacturasArticulos.find({factura: row.id}).populate('producto');
        row.estadoName = EstadosList[row.estado];
    }
    return res.ok( { status: 200, ...resultado } );
}

Procedures.create = async(req, res)=>{
    let params = req.allParams();
    let resultado = Object();
    let cliente = await Procedures.validarCliente(params.cliente);
    if(!cliente) return res.status(400).send({status:400, data: "Error al crear el cliente"});
    if(!cliente.id) return res.status(400).send({status:400, data: "Error al crear el cliente"});
    params.factura.idCliente = cliente.id;
    params.factura.barrioCliente = params.cliente.barrioCliente;
    resultado = await Procedures.createFactura( params.factura );
    for(let row of params.articulo){
        let data = {
            factura: resultado.id,
            precio: row.precioOferta || row.precioVenta,
            descripcion: row.talla || 'productos',
            cantidad: row.cantidadAduiridad || 1,
            producto: row.id
        };
        let respor = await Procedures.createFacturaArticulo( data );
    }
    resultado = await Facturas.findOne({ id: resultado.id }).populate('idCliente').populate('idVendedor');
    resultado.productos = await FacturasArticulos.find({factura: resultado.id}).populate('producto');
    let rpx = await ResumenCuenta.validandoEventosNew( { id: resultado.id, idVendedor: resultado.idVendedor.id, estado: resultado.estado } );
    return res.ok({status:200, data: resultado });
}

Procedures.validarCliente = async(data)=>{
    let resultado = Object();
    resultado = await Clientes.findOne({ cedula: data.cedulaCliente });
    let querys = {
        "nombre": data.nombreCliente,
        "apellido": data.nombreCliente,
        "cedula": data.cedulaCliente,
        "celular": data.celularCliente,
        "email": data.emailCliente,
        "direccion": data.direccionCliente,
        "barrioCliente": data.barrioCliente
    };
    if(!resultado) resultado = await Procedures.createCliente(querys);
    return resultado;
}

Procedures.createCliente = async(data)=>{
    let resultado = Object();
    resultado = await Clientes.create(data).fetch();
    return resultado;
}

Procedures.createFactura = async(data)=>{
    let resultado = Object();
    resultado = await Facturas.create(data).fetch();
    return resultado;
}

Procedures.createFacturaArticulo = async(data)=>{
    let resultado = Object();
    resultado = await FacturasArticulos.create(data);
    return resultado;
}

Procedures.update = async( req, res )=>{
    let params = req.allParams();
    // actualizacion de la factura
    await Facturas.update( { id: params.id }, params );

    let result = await ResumenCuenta.validandoEventosNew( params );

    if( !result.status !== 200 ) return res.status( 200 ).send( result );
    return res.status(200).send( { status: 200, data: "Completado Exitos"});
}

module.exports = Procedures;