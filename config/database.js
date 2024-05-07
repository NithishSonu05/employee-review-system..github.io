const mongoose = require('mongoose');
require('dotenv').config();

exports.connect = () => {
  mongoose
    .connect('mongodb://localhost/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log('DB CONNECTED SUCCESSFULLY'))
    .catch((err) => {
      console.log('DB CONNECTION FAILED');
      console.log(err);
      process.exit(1);
    });
};
