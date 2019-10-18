const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Phones = new Schema({
  title: {
    type: String
  },
  brand: {
    type: String
  },
  date: {
    type: String
  },
  os: {
    type: String
  },
  uri: {
    type: String
  }
}, {
    collection: 'mobiles'
  });

module.exports = mongoose.model('mobiles', Phones);