const siteRouter = require("./site")

const newRouter = require('./news');

function route(app) {
    app.use('/news', newRouter);
    
    app.use('/' ,siteRouter)
  
//   app.get('/news', (req, res) => {
//       return res.render(
//          'news'
//       )
//   })

  
  
  
}

module.exports = route;