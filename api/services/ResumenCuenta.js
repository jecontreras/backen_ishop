let Procedures = Object();
const _ = require('lodash');

Procedures.validandoEntrada = async ( data ) => {
    let resultado = Object();
    let puntoAnt = await Procedures.getPunto({ idPersona: data.idPersona });
    if (puntoAnt == false) puntoAnt = { ordenando: 0, valorTotal: 0 };
    console.log("****", data)
    if ( !data.valorEntrante ) return { status: 400, data: "Error en el valor entrante undefined" };
    if (data.tipoEntrada == 0) {
        data.valorAnterior = puntoAnt.valorTotal;
        data.tipoEntrada = 0;
        data.valorTotal = parseFloat( ( puntoAnt.valorTotal || 0) ) + parseFloat( data.valorEntrante );
    } else {
        data.valorAnterior = puntoAnt.valorTotal;
        data.tipoEntrada = 1;
        data.valorTotal = ( parseFloat( ( puntoAnt.valorTotal || 0) ) - parseFloat( data.valorEntrante ) || 0 );
    }
    data.ordenando = puntoAnt.ordenando + 1;
    data.codigo = codigo();
    resultado = await Puntos.create(data).fetch();
    //  console.log("dataOPt", data);
    await Procedures.getPuntosResumen(data);

    return resultado;
}

Procedures.getPunto = async ( data ) => {
    //console.log( data );
    let resultado = await Puntos.find({ where: { idPersona: data.idPersonas, estado: 0 }, sort: "ordenando DESC" }).limit(1);
    //console.log("Esto es =>>>>>>>>>>", resultado);
    resultado = resultado[0];
    if (resultado) return resultado;
    else return false;
}

Procedures.getPuntosResumen = async ( data ) => {
    let resultado = await ResumenPersona.find({ where: { estado: data.estado }, sort: "createdAt DESC" });
    resultado = resultado[0];
    //console.log("Encontro la data", resultado)
    if (resultado) return await Procedures.updatePuntosResumen(resultado.id, data);
    else return await Procedures.createPuntosResumen(data);
}

Procedures.updatePuntosResumen = async ( id, data ) => {
    // console.log( "***", data );
    let resultado = await ResumenPersona.update({ id: id }, {
        valorAnteriror: data.valorAnterior,
        valorEntrante: data.valorEntrante,
        valorTotal: data.valorTotal,
        tipoEntrada: data.tipoEntrada
    }).fetch();
    //console.log( "actualizando", resultado );
    return resultado;
}

Procedures.createPuntosResumen = async (data) => {
    let resultado = await ResumenPersona.create(data).fetch();
    return resultado;
}

Procedures.validandoEventosNew = async( params )=>{
    let resultado = Object();
    let extra = Array();
    let result = Object();
    let facturaData = Object();

    if( params.id ){
        facturaData = await Facturas.findOne( { where: { id: params.id } } );
        // validando si ya se le dio ese punto
        result = await Puntos.findOne( { factura: params.id });
        if( !result && params.estado == 1 ) await Procedures.Resumen( facturaData );
    }

    extra = await Facturas.find( { idVendedor: params.idVendedor, estado: 1 });
    resultado.gananciasVentasTotales = _.sumBy( extra, ( row )=> row.comision );
    resultado.cantidadVentasTotales = extra.length;

    extra = await Facturas.find( { idVendedor: params.idVendedor, estado: [ 0, 4, 5 ] });
    resultado.ventasEntregadasDetalles = _.sumBy( extra, ( row )=> row.comision );
    resultado.ganaciasVentasDetalles = extra.length;
    resultado.valanceGanarDetalles = _.sumBy( extra, ( row )=> row.comision );

    extra = await Facturas.find( { idVendedor: params.idVendedor, estado: [ 0, 4, 5, 1 ] });
    resultado.ventasEntregarComision = extra.length;
    resultado.gananciasVentasComision = _.sumBy( extra, ( row )=> row.comision );

    result = await ResumenPersona.findOne( { where: { idPersona: params.idVendedor, estado: 0 } } );
    if( !result ) return { status: 400, data: "Error no se encontro resumenPersona"};

    let pagosRel = await Pagos.find( { where: { idPersona: params.idVendedor, estado: [ 0, 1 ]} });
    resultado.cobrosCobrados = _.sumBy( pagosRel, ( row )=> row.monto );
    resultado.gananciasVentasTotales = ( resultado.gananciasVentasTotales - resultado.cobrosCobrados || 0 );
    result = await ResumenPersona.update( { id: result.id }, resultado ).fetch();
    return { status: 200, data: resultado };
}

Procedures.restandoPuntos = async( data )=>{
    let resultado = Object();
    resultado = await Procedures.validandoEventosNew( { idVendedor: data.idVendedor } );
    return resultado;
}

Procedures.Resumen = async( data )=>{
    // console.log("*******", data)
    let querys = {
        idPersona: data.idVendedor,
        tipoEntrada: 0,
        factura: data.id,
        valorEntrante: data.comision
    };
    let resultado = await Procedures.validandoEntrada(  querys );
    return resultado;
}

Procedures.validandoResultado = async( data )=>{

}

function codigo() {
    return (Date.now().toString(20).substr(2, 3) + Math.random().toString(20).substr(2, 3)).toUpperCase();
}

module.exports = Procedures;