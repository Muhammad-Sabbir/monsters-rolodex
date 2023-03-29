import "./App.css";
import { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";

import { SearchBox } from "./components/search-box/search-box.component";

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

  handleChenge = (e) => {
    this.setState({ searchField: e.target.value });
    console.log(this.state);
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChenge}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
export default App;
