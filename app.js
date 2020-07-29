const express = require('express');
app.use('/static', express.static('public'));

app.set('view engine', 'pug');

//index
app.get('/', (req, res, next) => {
  res.render('index');
})
//about
app.get('/about', (req, res, next) => {
  res.render('about');
})
//dynamic project
app.get('/projects/:id',(req, res, next) => {

})

app.listen(3000, () => {
  console.log('The application is running on localhost:3000!')
});