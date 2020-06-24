const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/notes-db',{
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
    .then(db => console.log('DB is connected'))
    .catch(er => console.error(err));