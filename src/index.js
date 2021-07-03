import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloProvider } from "@apollo/client";
import { ClientApollo } from './Queries/ClientApollo';

ReactDOM.render(
  <ApolloProvider client={ ClientApollo }>
    <App />
    </ApolloProvider>,
  document.getElementById('root')
);
