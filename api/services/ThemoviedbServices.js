let Procedures = Object();
let request = require('request');
var _ = require('lodash');

Procedures.get_articulo = async(req, res)=>{
    let params = req.allParams();
    let page = params.page ? params.page : 1;
    var options = {
        url: `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=${page}&api_key=5e41d84fc214deb8ee09d3f396fb767c&language=es&include_image_language=es`,
        headers: {
          'User-Agent': 'request'
        },
        json: true
      };
    return new Promise(resolve=>{
        request(options, (error, response, body)=>{
            // Do more stuff with 'body' here
            resolve(response.body);
         });
    });
}
Procedures.get_categoria = async(req, res)=>{
    let params = req.allParams();
    let page = params.page ? params.page : 1;
    var options = {
        url: `https://api.themoviedb.org/3/genre/movie/list?a=1?sort_by=popularity.desc&api_key=5e41d84fc214deb8ee09d3f396fb767c&language=es&include_image_language=es`,
        headers: {
          'User-Agent': 'request'
        },
        json: true
      };
       
    return new Promise(resolve=>{
        request(options, (error, response, body)=>{
            // Do more stuff with 'body' here
            resolve(response.body);
         });
    });
}
Procedures.get_articulo_id = async(req, res)=>{
  let params = req.allParams();
  params.texto = _.deburr(params.texto);
  var options = {
      url: `https://api.themoviedb.org/3/search/movie?query=${params.texto.toLowerCase()}&api_key=5e41d84fc214deb8ee09d3f396fb767c&language=es&include_image_language=es`,
      headers: {
        'User-Agent': 'request'
      },
      json: true
    };
     
    return new Promise(resolve=>{
        request(options, (error, response, body)=>{
            // Do more stuff with 'body' here
            resolve(response.body);
         });
    });
}
module.exports = Procedures;