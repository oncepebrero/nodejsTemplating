const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const indexRouter = require('./routes/router');
app.use(express.static('public'));

app.set('view engine', 'ejs' );
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', indexRouter);


app.listen(3000, () => {
    console.log(`App running on http://localhost:3000`)
});

