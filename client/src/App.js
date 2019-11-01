import React from 'react';
import './App.css';
import Card from './components/Card.js';
import DarkButton from './components/DarkButton.js';

/* Construct the App */
class App extends React.Component {
  constructor() {
    console.log("Card States Created");
    super();
    this.state = {
      players: []
    };
  }

  /* Fetch Data into Initial Mounting */
  componentDidMount() {
    console.log("Component Successfully Mounted");
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(res => this.setState({ players: res }))
      .catch(err => console.log(err));
  }

  /* Render Data To DOM */
  render() {
    console.log("Data Successfully Rendered");
    /* Why is my console log firing twice? */
    return (
      <div>
        <DarkButton />
        <Card player={this.state.players} />
      </div>
    );
  }
}

export default App;