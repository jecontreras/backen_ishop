/**
 * Datastores
 * (sails.config.datastores)
 *
 * A set of datastore configurations which tell Sails where to fetch or save
 * data when you execute built-in model methods like `.find()` and `.create()`.
 *
 *  > This file is mainly useful for configuring your development database,
 *  > as well as any additional one-off databases used by individual models.
 *  > Ready to go live?  Head towards `config/env/production.js`.
 *
 * For more information on configuring datastores, check out:
 * https://sailsjs.com/config/datastores
 */

module.exports.datastores = {


  /***************************************************************************
  *                                                                          *
  * Your app's default datastore.                                            *
  *                                                                          *
  * Sails apps read and write to local disk by default, using a built-in     *
  * database adapter called `sails-disk`.  This feature is purely for        *
  * convenience during development; since `sails-disk` is not designed for   *
  * use in a production environment.                                         *
  *                                                                          *
  * To use a different db _in development_, follow the directions below.     *
  * Otherwise, just leave the default datastore as-is, with no `adapter`.    *
  *                                                                          *
  * (For production configuration, see `config/env/production.js`.)          *
  *                                                                          *
  ***************************************************************************/

  /* default: {
    adapter: 'sails-mysql',
    url: 'mysql://root:@localhost:3306/ishop',
  }, */

  // Ishop
  default: {
    // adapter: 'sails-mysql',
    // url: 'mysql://hgMix7VrH0:VLDGqurCDh@remotemysql.com/hgMix7VrH0',
    // adapter: 'sails-mysql',
    adapter: 'sails-mysql',
     url: 'mysql://h9ubwr0wv583f1oy:n7yen21yow5k0dxj@dt3bgg3gu6nqye5f.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/hq3xymagq151m3u3',
     ssl: true
    //url: 'mysql://jose:123456@locomproaqui.com/ishop',
  },

  // Planeta
  /* default: {
    adapter: 'sails-mysql',
    url: 'mysql://luisalbertoj:c3a05fe00@148.72.232.34/original-brands',
  }, */

  cache: {
     adapter: 'sails-redis',
     url: 'redis://localhost:6379',
  }

};
