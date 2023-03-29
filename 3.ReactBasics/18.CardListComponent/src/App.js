import "./App.css";
import { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";

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
        <CardList name="sabbir">
          {this.state.monsters.map((monster) => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))}
        </CardList>
      </div>
    );
  }
}
export default App;
