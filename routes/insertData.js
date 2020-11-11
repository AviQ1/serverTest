const express = require('express');
const router = express.Router();
const Books = require('../models/book');
const Loans = require('../models/loan');
const Readers = require('../models/readers');

router.post('/addBook',  (req,res, next) =>{

    if (req.body === undefined)
    res.status(500).end('request has no json body');
  else if (req.body.title ===undefined ||req.body.authorFirstName  ===undefined || req.body.authorLastName ===undefined || req.body.rate ===undefined)
    res.status(500).end('request body has no user id or entity id or user type');
  else{
      let rate = parseInt(req.body.rate);
      
    sequelize.transaction( (t) => {
      return Books.create({
    title: req.body.title,
    authorFirstName: req.body.authorFirstName,
    authorLastName: req.body.authorLastName,
    rate: rate
      }, {transaction: t}).then( (userEnt) =>{
        res.status(200).end('Book Created');
      })
      .catch( (err) => {
        res.status(500).end('failed to create book ' + err);
    });
  });
}
  });

