const express = require('express')
const path = require('path');
const exphbs  = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const db = require('./models');


require('dotenv').config()

// View engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Logger
app.use(morgan('dev'));

// Public Path
app.locals.publicpath = path.join(__dirname, 'public');
app.use(express.static(app.locals.publicpath));

// Routes
app.use('/', require('./routes/web'));

app.listen(process.env.SERVER_PORT, () => console.log(`Server is listening on port ${process.env.SERVER_PORT}!`))

db.sequelize.sync().then(()=> console.log("Connected to the database.")).catch(err=>console.error(err));
