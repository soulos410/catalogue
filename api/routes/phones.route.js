const express = require('express');
const app = express();
const phonesRoutes = express.Router();

let Phones = require('../models/Phones');

// Defined store route
phonesRoutes.route('/add').post(function (req, res) {
  console.log(req.body);
  let phones = new Phones(req.body);
  console.log(phones);
  phones.save()
    .then(phones => {
      res.status(200).json({'phones': 'phones in added successfully'});
    })
    .catch(err => {
      console.log(err);
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
phonesRoutes.route('/').get(function (req, res) {
  console.log(1);
    Phones.find(function (err, phones){
    if(err){
      console.log(1);
      console.log(err);
    }
    else {
      res.json(phones);
    }
  });
});

// Defined edit route
phonesRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Phones.findById(id, function (err, phones){
      res.json(phones);
  });
});

//  Defined update route
phonesRoutes.route('/update/:id').post(function (req, res) {
    Phones.findById(req.params.id, function(err, phones) {
    if (!phones)
      return next(new Error('Could not load Document'));
    else {
        phones.title = req.body.title;
        phones.brand = req.body.brand;
        phones.date = req.body.date;
        phones.os = req.body.os;
        phones.uri = req.body.uri;

        phones.save().then(phones => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
phonesRoutes.route('/delete/:id').get(function (req, res) {
    Phones.findByIdAndRemove({_id: req.params.id}, function(err, phones){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = phonesRoutes;