/**
 * ArchivosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
let Procedures = Object();
const skipper = require('skipper-s3');
Procedures.file = async(req, res)=>{

    req.file('file').upload({
      adapter: skipper,
      key: 'AKIAIODH7ZEL3C6GG3AA',
      secret: '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',
      bucket: 'ecomercedilisap/productos'
    }, async (err, filesUploaded) => {
        if (err) return res.serverError(err);
        // console.log(filesUploaded)
        return res.ok({
            status: 200,
            files: "https://s3.amazonaws.com/ecomercedilisap/productos/"+filesUploaded[0].fd,
            textParams: req.allParams()
        });
    });

}

module.exports = Procedures;

