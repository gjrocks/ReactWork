import React, { Component } from 'react';

import FormApp from './FormApp';
import FunctionComponentTest from './FunctionComponentTest'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "Ganesh"
    }
  }

  componentDidMount() {
    console.log("App componentDidMount called");
  }
  componentWillMount() {
    console.log("App componentWillMount called");
  }
  componentDidUpdate() {
    console.log("App componentdidupdate called");
  }
  render() {
    console.log(" App render called");
    return (
      <div>
        <h1>Ganesh</h1>
        <FormApp />
        <FunctionComponentTest name={this.state.name} />
        <List />
      </div>
    );
  }
}

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {

      data: [

        {
          "name": "ganesh",
          "lname": "jadhav"
        },
        {
          "name": "aarvi",
          "lname": "jadhav"

        }
      ]
    };

  }

  render() {
    return (
      <div>
        <div>List from data</div><ul>
          {this.state.data.map(dt => <li>{dt.name}</li>)}
        </ul>
      </div>
    );
  }


}

export default App;
