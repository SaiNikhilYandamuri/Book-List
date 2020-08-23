import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import { getItemsQuery,deleteItemMutation } from '../queries/queries';
import flowright from 'lodash.flowright';
const compose = flowright;

class ItemList extends Component{
    constructor(props){
        super(props);
        this.state={
            selected: null
        }
    }
    deleteItem(id1){
        console.log('Inside deleteItem');
        console.log(id1)
        //var data = this.props.deleteItemMutation;
        
        deleteItemMutation({
            variables: {
                id: id1
            },
            refetchQueries: [{query: deleteItemMutation}]
        });
    }
    displayItems(){
        var data = this.props.data;
        if(data.loading){
            return(<div>Loading Items...</div>)
        }else{
            return data.items.map(item1=>{
                return(
                    <li key={item1.id} onClick={(e)=>{
                            this.deleteItem(item1.id)
                        }}>{item1.item}</li>
                );
            })
        }
    }    
    render(){
        return(
            <div id="main">
                <ul id="item-list" >
                    {this.displayItems()}
                </ul>
            </div>
        );
    }
}

export default graphql(getItemsQuery)(ItemList);
/*]]export default compose(
    graphql(getItemsQuery)(ItemList),
    graphql(deleteItemMutation,{name:"deleteItemMutation"})
);*/