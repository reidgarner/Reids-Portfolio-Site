import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  }
]

const array = [1, 4, 9, 16]
const newArray = array.map(function (x) {return x * 2})
console.log(newArray)

class App extends Component {
  render() {
    const helloWorld = 'Welcome to the Road to Learn React'
    const user = {
      first: 'Reid',
      last: 'Garner'
    }
    return (
      <div className="App">
        <h2>{helloWorld}</h2>
        <h2>{user.first}</h2>
        <h2>{user.last}</h2>
        {list.map(function(item){
          return <div>{item.title}</div>
        })}
      </div>
    );
  }
}

export default App;
