var crypto = require("crypto");
module.exports = async(imagen)=>{
    let nombreImagen = crypto.randomBytes(20).toString('hex');
    let result = Object();
    result = await imagen.upload({
        dirname: require('path').resolve(sails.config.appPath, 'assets/images/productos'),
        saveAs : nombreImagen + '.jpg'
    }, (err, data) => {
        if(err) return false;
        sails.log(data);
        return nombreImagen + '.jpg';
    }).readable;
    return result;
};