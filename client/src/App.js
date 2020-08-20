import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

import ItemList from './components/ItemList';
import AddItem from './components/AddItem';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="Main">
        <h1>To Do List</h1>
        <ItemList/>
        <AddItem/>
      </div>
    </ApolloProvider>
  );
}

export default App;
