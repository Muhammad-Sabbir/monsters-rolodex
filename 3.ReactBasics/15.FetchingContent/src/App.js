import "./App.css";
import { Component } from "react";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }
  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    await this.setState({ monsters: users });
    console.log(users);
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}
export default App;
