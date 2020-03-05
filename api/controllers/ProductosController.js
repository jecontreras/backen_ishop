/**
 * ProductosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

let Procedures = Object();

Procedures.querys = async (req, res) => {
    let params = req.allParams();
    let resultado = Object();

    resultado = await QuerysServices(Productos,params);
    for(let row of resultado.data){
    	row.idEmpresa = await Empresas.findOne({id: row.idEmpresa});
    	row.files = ["./assets/product.jpg"];
    }

    return res.ok( { status: 200, ...resultado } );
}

Procedures.uploadProducto = function (req, res) {
    req.file('avatar').upload({
        dirname: require('path').resolve(sails.config.appPath, 'assets/images')
    }, function (err, uploadedFiles) {
        if (err) return res.serverError(err);

        return res.json({
            message: uploadedFiles.length + ' file(s) uploaded successfully!'
        });
    });
},

Procedures.avatar = function (req, res) {

    User.findOne(req.param('id')).exec(function (err, user) {
        if (err) return res.serverError(err);
        if (!user) return res.notFound();

        // User has no avatar image uploaded.
        // (should have never have hit this endpoint and used the default image)
        if (!user.avatarFd) {
            return res.notFound();
        }

        var SkipperDisk = require('skipper-disk');
        var fileAdapter = SkipperDisk(/* optional opts */);

        // set the filename to the same file as the user uploaded
        res.set("Content-disposition", "attachment; filename='" + file.name + "'");

        // Stream the file down
        fileAdapter.read(user.avatarFd)
            .on('error', function (err) {
                return res.serverError(err);
            })
            .pipe(res);
    });
}


module.exports = Procedures;

