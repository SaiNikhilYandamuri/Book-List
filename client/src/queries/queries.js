import {gql} from 'apollo-boost';

const getItemsQuery = gql`
    {
        items{
            id
            item
        }
    }
`

const addItemMutation = gql`
    mutation($item: String!){
        addItem(item: $item){
            item
        }
    }
`

const deleteItemMutation = gql`
    mutation($id: ID!){
        deleteItem(id: $id){
            item
        }
    }
`

export {getItemsQuery,addItemMutation,deleteItemMutation};