import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import { getItemsQuery } from '../queries/queries';

class ItemList extends Component{
    constructor(props){
        super(props);
        this.state={
            selected: null
        }
    }
    displayItems(){
        var data = this.props.data;
        if(data.loading){
            return(<div>Loading Items...</div>)
        }else{
            return data.items.map(item1=>{
                return(
                    <li>{item1.item}</li>
                );
            })
        }
    }
    render(){
        return(
            <div id="main">
                <ul id="item-list">
                    {this.displayItems()}
                </ul>
            </div>
        );
    }
}

export default graphql(getItemsQuery)(ItemList);