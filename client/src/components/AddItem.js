import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {addItemMutation,getItemsQuery} from '../queries/queries';
import flowright from 'lodash.flowright';
const compose = flowright;

class AddItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            item: ''
        };
    }
    submitForm(e){
        e.preventDefault();
        this.props.addItemMutation({
            variables: {
                item: this.state.item
            },
            refetchQueries: [{query: getItemsQuery}]
        });
    }
    render(){
        return(
            <form id="add-item" onSubmit={this.submitForm.bind(this)}>
                <div className="field">
                    <label>Book Name</label>
                    <input type="text" onChange={e => this.setState({item: e.target.value})}/>
                </div>
                <button>+</button>
            </form>
        );
    }
}

export default compose(
    graphql(addItemMutation,{name:"addItemMutation"})
)(AddItem);