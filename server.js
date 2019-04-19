'use strict'

const express = require('express');
const app = express();
const logger = require('logger').createLogger();
const users = require('./users')



app.get('/', (req, res) => res.send({'status': 'Active'}))
app.get('/users', async function(req, res){
  try{
    let userDetails = await users.get();
    res.send(userDetails)
  }catch(error){
    res.status(500).send(error)
  }
    
})

app.post('/users', async function(req, res){
  try{
    let status = await users.post(req.body);
    res.status(201).send(status)
  }catch(error){
    res.status(500).send(error)
  }
})

app.delete('/users/:id', async function(req, res){
  try{
    let status = await users.delete(req.params.id);
    res.send(status)
  }catch(error){
    res.status(500).send(error)
  }
})


app.listen(5555, function() {
    logger.error('listening on port : ' + 5555);
});

