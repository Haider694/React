const express = require("express");
const schema= require("./schema/schema")
const {graphqlHTTP}= require("express-graphql");
const app=express();
app.get('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(5000,()=>{
    console.log("listenin port 5000")
})