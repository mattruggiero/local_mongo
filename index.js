const express = require('express');
const mongoose = require('mongoose');
const Name = require('./models/Name');

const MONGO_ADDRESS = '127.0.0.1';
const MONGO_PORT = '27017';
const COLLECTION_NAME = 'my_app';

//These options are required the defaults are depracated
const MONGO_OPTIONS = {
    useNewUrlParser:true,
    useUnifiedTopology: true
};

mongoose.connect(`mongodb://${MONGO_ADDRESS}:${MONGO_PORT}/${COLLECTION_NAME}`,MONGO_OPTIONS)
    .then(()=> console.log('Mongo Connected'))
    .catch(err=> console.log(err));


let newName = new Name({
    first: "Jim",
    last:"Bob"
});

//If a collection does not exist it will be created here automatically 
newName
    .save()
    .then(console.log("Success Message"))
    .catch(error=>console.log(err));