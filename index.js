var bodyParser = require('body-parser');
var express = require('express');
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');
var user = require('./user.js');
var userSkills = require('./skills.js');
var app = express();
var port = 3000;
app.use(bodyParser.json());
app.use(middleware.addHeaders);

app.listen(port,function() {
  console.log("Listening on port", port);
});

app.get('/name',mainCtrl.getName);
app.get('/location',mainCtrl.getLocation);
app.get('/occupations',mainCtrl.getOccupation);
app.get('/occupations/latest',mainCtrl.getLatestOccupation);
app.get('/hobbies',mainCtrl.getHobbies);
app.get('/hobbies/:type',mainCtrl.getHobbiesByType);
app.get('/family',mainCtrl.getFamily);
app.get('/family/:gender',mainCtrl.getFamilyGender);
app.get('/restaurants',mainCtrl.getRestaurants);
app.get('/restaurants/:name',mainCtrl.getRestaurantsByName);

app.get('/secrets/:username/:pin',mainCtrl.secret);

app.put('/name', mainCtrl.putName);
app.put('/location', mainCtrl.putLocation);
app.post('/hobbies',mainCtrl.postHobbie);
app.post('/occupations',mainCtrl.postOccupation);
app.post('/family',mainCtrl.postFamily);
app.post('/restaurants',mainCtrl.postRestaurants);
app.get('/skills',mainCtrl.getSkills);
app.post('/skills', middleware.generateId,mainCtrl.postSkill);
