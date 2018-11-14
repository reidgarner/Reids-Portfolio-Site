import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];

// const array = [1, 4, 9, 16]
// const newArray = array.map(function (x) {return x * 2})
// console.log(newArray)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(id) {
    const isNotID = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotID);
    this.setState({ list: updatedList });
  }

  render() {
    const helloWorld = "Welcome to my Portfolio Page!";
    const user = {
      first: "Reid",
      last: "Garner"
    };
    return (
      <div className="App">
        <form>
          <input type="text" />
        </form>
        <h2>{helloWorld}</h2>
        <h2>{user.first}</h2>
        <h2>{user.last}</h2>
        {this.state.list.map(item => {
          const onHandleDismiss = () => this.onDismiss(item.objectID);

          return (
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              <span>
                <button
                  onClick = {() => this.onDismiss(item.objectID)}
                  type="button"
                >
                  Dismiss
                </button>
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
