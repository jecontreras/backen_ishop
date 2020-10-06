/**
 * PlantillasController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

let Procedures = Object();

Procedures.querys = async(req, res)=>{
    let params = req.allParams();
    let resultado = Object();
    resultado = await QuerysServices(Plantillas,params);
    return res.ok( { status: 200, ...resultado } );
}

Procedures.inicial = async(req, res)=>{
    let params = req.allParams();
    let resultado = Array();
    let result = Array();
    resultado = await Productos.find({ estado:0 }).populate('idEmpresa');
    for(let row of resultado){
        row.files = [ row.image ];
        row.foto = row.image;
    }
    result = [
        {
            titulo:"Nuevos Productos",
            subtitle: "16 Productos desde $16.000",
            descripcion: "Entrega de 5 a 10 dias hábiles",
            productos: resultado
        },
        {
            titulo:"Nuevos Colecciones",
            subtitle: "16 Productos desde $16.000",
            descripcion: "Entrega de 5 a 10 dias hábiles",
            productos: resultado
        }
    ];
    return res.status(200).send({status:200, data: result});
    
}

module.exports = Procedures;