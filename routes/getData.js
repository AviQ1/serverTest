const express = require('express');
const router = express.Router();
const Books = require('../models/book');
const Loans = require('../models/loan');
const Readers = require('../models/readers');

router.get('/getBooks',  (req,res, next) =>{

    Books.findAll().then(result =>{{
      res.status(200).json(result);
    }})
    .catch(err =>{
      res.status(500).end('failed to retrieve books');
    });
  });

  router.get('/getReaders',  (req,res, next) =>{

    Readers.findAll().then(result =>{{
      res.status(200).json(result);
    }})
    .catch(err =>{
      res.status(500).end('failed to retrieve readers');
    });
  });
  router.get('/getloans',  (req,res, next) =>{

    Loans.findAll({include: [{model: Books}, {model: Readers}]}).then(result =>{{
      res.status(200).json(result);
    }})
    .catch(err =>{
      res.status(500).end('failed to retrieve loans');
    });
  });
  

  module.exports = router;