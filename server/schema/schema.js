const graphql = require('graphql');
const _ = require('lodash')
const { GraphQLObjectType, GraphQLString,GraphQLSchema} = 
    graphql;
var books=[
    {name:'Hezaro yek Shab',gener:'romans',id:1},
    {name:'Fergosen memorizes',gener:'sport',id:2},
    {name:'Hpliday physics',gener:'sience',id:3}
];

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        gener: { type: GraphQLString }
    })
});

const RootQuery=new GraphQLObjectType({ 
    name:'RootQueryType',
    fields:{
        book:{
            type:BookType,
            args:{ id: { type: GraphQLString }},
            resolve(parent,args){
               return _.find(books,{id:args.id});
            }
        }
    },

});
module.exports=new GraphQLSchema({
    query:RootQuery
});