const siteRouter = require("./site")
const courseRouter = require('./courses');

const newRouter = require('./news');

function route(app) {
    app.use('/news', newRouter);
    
    app.use('/courses', courseRouter);
    
    app.use('/' ,siteRouter)
  
}

module.exports = route;