import "./App.css";
import { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
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
        <input
          type="search"
          placeholder="search monsters"
          onChange={(e) =>
            this.setState({ searchField: e.target.value }, () => {
              console.log(this.state);
            })
          }
        />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}
export default App;
