const db = require('../data/dbConfig');

module.exports = {
    find, 
    add, 
    remove,
}

function find(){
    return db('content')
}

function add(){
    return null
}

function remove(){
    return null
}