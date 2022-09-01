const express = require("express");
const schema= require("./schema/schema")
const graphqlHttp= require("express-graphql");
const app=express();
app.use('/graphql',graphqlHttp({
    schema,
    graphiql:true
}));

app.listen(4000,()=>{
    console.log("listenin port 4000")
})