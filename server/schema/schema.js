const Item = require('../models/item');
const graphql = require('graphql');
const {GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull
}= graphql;

const ItemType = new GraphQLObjectType({
    name: 'Item',
    fields: ()=>({
        item: {type: GraphQLString}
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        items: {
            type: new GraphQLList(ItemType),
            resolve(parent,args){
                //code to get data from db / other source
                return Item.find({});
            }
        }
    }
});

/*
{
  items{
    item
  }
}
*/

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addItem: {
            type: ItemType,
            args: {
                item: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parent,args){
                let item = new Item({
                    item: args.item
                });
                //Mongoose function provided to the model
                return item.save();
            }
        },
        deleteItem: {
            type: ItemType,
            args: {
                item: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parent,args){
                let item = new Item({
                    item : args.item
                });
                //Mongoose function provided to the model
            }
        }
    }
});

/*
mutation {
  addItem(item: "Hello World"){
    item
  }
}
*/

module.exports = new graphql.GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});