const { render } = require('node-sass');
const Course = require('../models/Course');

// const {mutipleMongooseToObject} = require('../../util/mongoose')
class CourseController {
  // [GET] /news
 
  // [GET] 
  show(req, res, next) {
    

   Course.findOne({ slug: req.params.slug}) 
      .then(course => {
        res.render('courses/show');
      })
      .catch(next);
  }
}

module.exports = new CourseController();