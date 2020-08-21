import {gql} from 'apollo-boost';

const getItemsQuery = gql`
    {
        items{
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

export {getItemsQuery,addItemMutation};