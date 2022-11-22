const { render } = require('node-sass');
const Course = require('../models/Course');

const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require('../../util/mongoose');
class CourseController {
  // [GET] /news

  // [GET]
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render('courses/show', { course: mongooseToObject(course) });
      })
      .catch(next);
  }

  create(req, res, next) {
    res.render('courses/create');
  }

  store(req, res, next) {
    res.json(req.body)
  }
}

module.exports = new CourseController();
