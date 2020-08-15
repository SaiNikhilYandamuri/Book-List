const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

app.use(cors());

mongoose.connect('mongodb+srv://admin:admin@cluster0.q5qn0.mongodb.net/Todo?retryWrites=true&w=majority');
mongoose.connection.once('open',()=>{
    console.log('Connected to database');
});

app.use('/graphql',graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(4000,()=>{
    console.log('Listening for requests on Port 4000');
});

