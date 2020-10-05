const knex = require('knex');
const knexConfig = require("../knexfile.js");
const environment =  process.env.NODE_ENV;
const db = knex(knexConfig[environment]);



module.exports = {
    find,
    createMessage
};


function find() {
    return db('messages');
}

function createMessage(message) {
    return db('messages')
      .insert(message)
      .then(id => id);
  }
  
  