/**
 * PostController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {


  /**
   * Action blueprints:
   *    `/post/find`
   */
  find: function (req, res) {

    if (req.param('id')) {
      Post.findOne(req.param('id')).done(function(err, post) {
        if (err) {
          return res.json(err, 500)
        }
        return res.json(post);
      });
    }
    else {
      Post.find().limit(10).done(function(err, posts) {
        if (err) {
          return res.json(err, 500);
        }
        return res.json(posts);
      });
    }
  },


  /**
   * Action blueprints:
   *    `/post/add`
   */
  add: function (req, res) {

    Post.create({
      author: req.param('author'),
      content: req.param('content')
    }).done(function(err, post) {
      if (err) {
        return res.json(err, 500);
      }
      return res.json(post);
    });
  },


  /**
   * Action blueprints:
   *    `/post/edit`
   */
  edit: function (req, res) {

    Post.update({
      id: req.param('id')
    }, {
      content: req.param('content')
    }, function(err, posts) {
      if (err) {
        return res.json(err, 500);
      }
      return res.json(posts);
    });
  },


  /**
   * Action blueprints:
   *    `/post/delete`
   */
  delete: function (req, res) {

    // Send a JSON response
    return res.json({
      hello: 'world'
    });
  },




  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to PostController)
   */
  _config: {}


};
