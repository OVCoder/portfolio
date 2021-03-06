const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
var profile = require('./profile');



const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/profile', profile);
app.use(express.static(__dirname + '/public'));


//Here we're setting the views directory to be ./views
//thereby letting the app know where to find the template files

app.set('views', './views');

//Here we're setting the default engine to be ejs
//note we don't need to require it, express will do that for us.
app.set('view engine', 'ejs');// 'ejs' tells express which template engine to use

//Now instead of using res.send we can use
//res.render to send the output of the template by filename

app.get('/', (req, res) =>{
    const data = {
        person:{
            firstName: 'Olga',
            lastName: 'Volodko',
        }
    }
    res.render('index', data); //here 'index' is the view argument, which is a string that is the file path of the view file to render.
});

app.get('/contact',(req, res) => {
    res.render('contact');
});

app.post('/thanks', (req, res) => {
    res.render('thanks', { contact: req.body });
});
  
app.listen(process.env.PORT || 8080, () => {
    console.log('listening at http://localhost:8080');
});