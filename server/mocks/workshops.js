module.exports = function(app) {
  var express = require('express');
  var workshopsRouter = express.Router();

  workshopsRouter.get('/', function(req, res) {
    res.send({
      'workshops': [
        {id: 1, title: 'test', type: 'in_house', description: 'Lipsum dolor', date: '2015-06-28'},
        {id: 2, title: 'test', type: 'on_request', description: 'Dolor sit amet', date: '2015-06-15'}
      ]
    });
  });

  workshopsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  workshopsRouter.get('/:id', function(req, res) {
    res.send({
      'workshops': {
        id: req.params.id
      }
    });
  });

  workshopsRouter.put('/:id', function(req, res) {
    res.send({
      'workshops': {
        id: req.params.id
      }
    });
  });

  workshopsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/workshops', workshopsRouter);
};
