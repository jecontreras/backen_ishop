/**
 * ChatdetalladoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

let Procedures = Object();

Procedures.querys = async(req, res)=>{
    let params = req.allParams();
    let resultado = Object();
    resultado = await QuerysServices(Chatdetallado,params);
    return res.ok( { status: 200, ...resultado } );
}
//////////////////////////////////////////////////////
Procedures.get_chat_user = async (req, res) => {
    let params = req.allParams();
    let resultado = Object();
    let result = Array();

    resultado = await Chatdetallado.find({
        emisor: params.emisor,
        reseptor: params.reseptor
    })
        .populate('emisor')
        .populate('reseptor');
    result = resultado;

    resultado = await Chatdetallado.find({
        reseptor: params.emisor,
        id: { '!=': resultado.map(row => row.id) },
        emisor: params.reseptor
    })
        .populate('emisor')
        .populate('reseptor');
    result = result.concat(resultado);
    // resultado = _.unionBy(resultado || [], result, 'id');

    return res.send({ status: 200, mensaje: result });
}

//////////////////////////////////////////////////////

Procedures.iniciar_chat = (req, res) => {
    let resultado = Object();
    let params = req.allParams();
    if (!params.emisor && !params.reseptor && !params.articulo) return res.send({ status: 400, mensaje: "Erro emisor_id y reseptor_id undefined" });

    return Chat.find({
        where: {
            or: [
                { reseptor: params.reseptor },
                { emisor: params.emisor }
            ]
        },
        limit: 1
    }).then((chat_init) => {
        chat_init = chat_init[0];
        let cha1 = chat_init;
        if (cha1) {
            params.chat = cha1.id;
            return chat_detallado();
        }
        return Chat.find({
            where: {
                reseptor: params.emisor,
                emisor: params.reseptor
            },
            limit: 1
        }).then((chat_init) => {
            // console.log(chat_init,"******", params)
            chat_init = chat_init[0];
            let cha2 = chat_init;
            if (!cha2) return chat_create();
            else params.chat = cha2.id;
            return chat_detallado();
        });
    });

    async function chat_create() {
        let resultado = Object();
        resultado = await Notificacion.create({
            titulo: 'Nuevo Mensaje a tu Articulo',
            emisor: params.emisor,
            reseptor: params.reseptor,
            tipo: 'chat',
            articulo: params.articulo,
            descripcion: params.mensaje
        });
        params.notificacion = true;
        return Chat.create({
            articulo: params.articulo,
            emisor: params.emisor,
            reseptor: params.reseptor,
            mensaje: params.mensaje,
        }).then((msx) => {
            return Chat.find({
                where: {
                    emisor: params.emisor,
                    reseptor: params.reseptor,
                },
                limit: 1
            }).then((chat_init) => {
                chat_init = chat_init[0];

                if (chat_init) { params.chat = chat_init.id; return chat_detallado(); }
                return res.send({ status: 500, mensaje: "chat no encontrado" });
            });
        });
    }
    function chat_detallado() {
        return Chatdetallado
            .create({
                chat: params.chat,
                mensaje: params.mensaje,
                emisor: params.emisor,
                reseptor: params.reseptor,
                articulo: params.articulo
            }).then((chat) => {
                return Chatdetallado
                    .find({
                        where: {
                            chat: params.chat,
                            mensaje: params.mensaje,
                            emisor: params.emisor,
                            reseptor: params.reseptor,
                            articulo: params.articulo
                        },
                        limit: 1
                    })
                    .populate('emisor')
                    .populate('reseptor')
                    .populate('articulo')
                    .then((rta) => {
                        rta[0].notificacion = params.notificacion || false;
                        Put_chat({
                            id: params.chat,
                            mensaje: rta[0].mensaje
                        });
                        return res.send({ status: 200, mensaje: rta[0] });
                    });
            });
    }
    async function Put_chat(data){
        let resultado = await Chat.update({
            id: data.id
          }, { mensaje: data.mensaje });
          console.log("Chat", resultado)
          return resultado;
    }
}

module.exports = Procedures;