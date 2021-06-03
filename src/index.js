const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost/heaven-database')
    .then(db => console.log('DB connected'))
    .catch(err => console.error(err));
//          Settings
app.set('port', process.env.PORT || 3000);

//          Middles

app.use(morgan('dev'));
app.use(express.json());
//          Routes
app.use('/tasks', require('./routes/tasks'));

//          Statics

app.use(express.static(__dirname + '/public'));
//          Server Listening
app.listen(app.get('port'), () => {
    console.log('Server listening port', app.get('port'))
});