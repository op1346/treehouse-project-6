const express = require('express');
const {projects} = require('./data.json');
const port = process.env.PORT || 3000;
const app = express();

//middleware
app.set('view engine', 'pug');
app.use(express.json());
//static route
app.use('/static', express.static('public'));

//index
app.get('/',(req, res, next) => {
  res.render('index', {projects});
});

//about
app.get('/about',(req, res, next) => {
  res.render('about');
});

//projects
app.get('/projects/:id',(req, res, next) => {
  const projectId = req.params.id;
  const project = projects.find(({id}) => id === +projectId);

  if (project) {
  res.render('project', {project});
  } else {
    res.sendStatus(404);
  }
});

//error handling
app.use((req, res, next) => {
  const err = new Error('Page not found!');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});

//server
app.listen(port, () => {
  console.log('The application is running on localhost:3000!');
});