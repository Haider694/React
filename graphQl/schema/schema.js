const graphql= require('graphql');
const[GraphQLObjectType,GraphQLSchema,GraphQLID,GraphQLString]= graphql;

const books=[
    {id:1,name:titan,gender:action},
    {id:1,name:school2017,gender:loveStory},
    {id:1,name:kamasutr,gender:sexstory},
];
const BookType =new GraphQLObjectType(
    {
        name:Book,
        filds:()=>({
            id:{type:GraphQLID},
            name:{type:GraphQLString},
            gender:{type:GraphQLString}
        })
    }
)
const RootQurry= new GraphQLObjectType(
    {
        name:RootQurryType,
        filds:()=>({
            book:{
                type:BookType,
                args:{id:{type:GraphQLID}},
                restore(parent,args){
                    return _.find(books,{id:args.id});
                }

            }
        })
    }
)
module.exports=new GraphQLSchema({
    query:RootQurry
})