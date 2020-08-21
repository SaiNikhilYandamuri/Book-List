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
      <div id="main">
        <h1>To Do List</h1>
        <AddItem/>
        <ItemList/>
      </div>
    </ApolloProvider>
  );
}

export default App;
