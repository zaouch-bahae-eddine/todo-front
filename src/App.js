import React from 'react';
import './App.css';
import TodoList from './Pages/TodoList';
import Details from './Pages/Details';
import {GlobalStyle} from './Components/GlobalStyle'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


function App() {
  return (
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact component={TodoList} />
          <Route path="/details/:id" exact children={<Details />} />
        </Switch>
      </Router>
  );
}

export default App;
