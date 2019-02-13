const express = require('express')
const subdomain = require('express-subdomain');
const cors = require('cors');
const path = require('path');
const exphbs  = require('express-handlebars');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const useragent = require('express-useragent');
const fs = require('fs');
const app = express();
const db = require('./models');


require('dotenv').config()

// View engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Logger
app.use(morgan('dev'));
app.use(cors());

// Middleware
app.use(cookieParser())
app.use(bodyParser.json());
app.use(expressValidator());
app.use(useragent.express());

// Public Path
app.locals.publicpath = path.join(__dirname, 'public');
app.use(express.static(app.locals.publicpath));

// Routes
app.use(subdomain('api', require('./routes/api')));
app.use(subdomain('app', require('./routes/app')));
app.use('/', require('./routes/web'));

app.listen(process.env.SERVER_PORT, () => console.log(`Server is listening on port ${process.env.SERVER_PORT}!`))

// DB Sync
db.sequelize.sync().then(()=> console.log("Connected to the database.")).catch(err=>console.error(err));

// Socket Server
require('./sockets/socket.io.js')

// Mongoose
require('./mongo/mongoose')

// Directory Sync
if(!fs.existsSync(path.join(app.locals.publicpath, 'public'))) {
  fs.mkdirSync(path.join(app.locals.publicpath, 'public'));
}
if(!fs.existsSync(path.join(app.locals.publicpath, 'public', 'avatars'))) {
  fs.mkdirSync(path.join(app.locals.publicpath, 'public', 'avatars'));
}
