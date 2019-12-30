/**
 * ThemoviedbController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
let Procedures = Object();
let request = require('request');

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
       
    request(options, (error, response, body)=>{
        // Do more stuff with 'body' here
        return res.ok(response.body);
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
       
    request(options, (error, response, body)=>{
        // Do more stuff with 'body' here
        return res.ok(response.body);
     });
}
module.exports = Procedures;
