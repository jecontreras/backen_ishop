/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  // '/': { view: 'pages/homepage' },
  'POST /themovie/get_articulo': 'ThemoviedbController.get_articulo',
  'POST /themovie/get_categoria': 'ThemoviedbController.get_categoria',
  'POST /themovie/get_articulo_id': 'ThemoviedbController.get_articulo_id',

  'POST /app/querys': 'AppController.querys',
  'POST /menu/querys': 'MenuController.querys',
  'POST /archivo/querys': 'ArchivoController.querys',
  'POST /articulo_categoria/querys': 'ArticuloCategoriaController.querys',
  'POST /articulo/querys': 'ArticuloController.querys',
  'POST /cart_articulo/querys': 'CartarticuloController.querys',
  'POST /cart/querys': 'CartController.querys',
  'POST /categoria/querys': 'CategoriaController.querys',
  'POST /categoria_user/querys': 'CategoriaUserController.querys',
  'POST /chat/querys': 'ChatController.querys',
  'POST /chatdetallado/querys': 'ChatdetalladoController.querys',
  'POST /comentario/querys': 'ComentarioController.querys',
  'POST /empresa/querys': 'EmpresaController.querys',
  'POST /galeria/querys': 'GaleriaController.querys',
  'POST /marca/querys': 'MarcaController.querys',
  'POST /negocios/querys': 'NegociosController.querys',
  'POST /notificacion/querys': 'NotificacionController.querys',
  'POST /rol/querys': 'RolController.querys',
  'POST /user/querys': 'UserController.querys',
  'POST /user_rol/querys': 'UserRolController.querys',
  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
