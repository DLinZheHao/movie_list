const path = require('path');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const exphbs = require('express-handlebars');

const movieRoute = require('./route/movieRoutes');

dotenv.config({ path: './config.env' });

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', movieRoute);

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}!`);
});
