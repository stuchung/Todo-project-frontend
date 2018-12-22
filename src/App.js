import React, { Component } from 'react';
import axios from 'axios';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }
//
// export default App;


// Mock Data
// const list = [
//   {
//     "id":1,
//     "title": "1st todo",
//     "body": "This is my first Reactdisplay"
//   },
//   {
//     "id":2,
//     "title": "2nd todo",
//     "body": "This is my second Reactdisplay"
//   },
//   {
//     "id":3,
//     "title": "3rd todo",
//     "body": "This is my third Reactdisplay"
//   },
// ]


// This is pulling from the backend server via axios to display data on frontend server.

// This line delares and constructs the component list and loads it into state
class App extends Component {
  state= {
    todos: []
  };

//This set the timing of the React lifecycle for each API call. The HTTP requests use the componentDidMount method to get all 'todos'

componentDidMount() {
  this.getTodos();
}

getTodos() {
  axios
    .get('http://127.0.0.1:8000/api/')
    .then(res => {
      this.setState({ todos: res.data });
    })
    .catch(err => {
      console.log(err);
    });
}

  // the map method is a javascript array to display all the items
  render() {
    return (
      <div>
        {this.state.todos.map(item => (
          <div key={item.id}>
            <h1>{item.title_name}</h1>
            <p>{item.body}</p>
            <p>{item.pub_date}</p>
          </div>
        ))}
      </div>
    );
  }
}
export default App;
