import React, { Component } from 'react';
import './App.css';
import UserForm from './components/UserForm/UserForm';
import axios from 'axios';

// https://api.github.com/users/john

class App extends Component {

  state = {
    repos: null
  }

  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    if (user) {
      axios.get(`https://api.github.com/users/${user}`)
        .then((res) => {
          const repos = res.data.public_repos;
          console.log(repos);
          this.setState({ repos });   // property:value  if property name = value (e.g. repos: repos), then 1 name is enough in ES6 
        })
    } else return;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">HTTP calls in React</h1>
        </header>
        <UserForm getUser={this.getUser} />
        {this.state.repos ? <p>Number of repos: {this.state.repos} </p> : <p> Please, enter a username.</p>}
      </div>
    );
  }
}

export default App;

