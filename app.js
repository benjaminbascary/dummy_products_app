// Core Modules
const path = require('path');
// 3rd Party Modules
const express = require('express');
const bodyParser = require('body-parser');
// Local Imports
const { router, products } = require('./routes/admin');
const shopRoute = require('./routes/shop');
const notFound = require('./routes/404');
// Instances
const app = express();
// Set the view engine
app.set('view engine', 'ejs');
app.set('views', 'views');



app.use(bodyParser.urlencoded({extended: true}));
// Static files
app.use(express.static(path.join(__dirname, 'public')));
// Routes
app.use(router);
app.use(shopRoute);

// If not found any route of the above
app.use(notFound);

// Starts server
app.listen(3000);