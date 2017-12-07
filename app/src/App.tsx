import * as React from 'react';
import './App.css';

const logo = require('./logo.svg');

class User {
  readonly name: string;
  numberOfDrunkCoffees: number = 0;

  constructor(name: string) {
    this.name = name;
  }
}

let users = [new User('David'), new User('Vladimir')];

interface CoffeeConsumeOverviewProps {
  items: User[];
}

interface CoffeeConsumeUserProps {
  user: User;
}

class CoffeeConsumeUser extends React.Component<CoffeeConsumeUserProps> {
  readonly incrementByOneCoffeeClick = () => {
    this.props.user.numberOfDrunkCoffees++;

    this.setState({});
  }

  readonly incrementByTwoCoffeesClick = () => {
    this.props.user.numberOfDrunkCoffees++;
    this.props.user.numberOfDrunkCoffees++;

    this.setState({});
  }

  render() {
    return (
      <div>
        <span>{this.props.user.name}</span>
        <span>{this.props.user.numberOfDrunkCoffees}</span>
        <span><button onClick={this.incrementByOneCoffeeClick}>+</button></span>
        <span><button onClick={this.incrementByTwoCoffeesClick}>++</button></span>
      </div>);
  }
}

class CoffeeConsumeOverview extends React.Component<CoffeeConsumeOverviewProps> {
  render() {
    return (
      <div>
        {this.props.items.map(user => <CoffeeConsumeUser key={user.name} user={user} />)}
      </div>);
  }
}

interface AddUserProps {
  onUserAdd: any;
}

interface AddUserState {
  name: string;
}

class AddUser extends React.Component<AddUserProps, AddUserState> {
  readonly handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      users.push(new User(e.target.value));
      
      e.target.value = '';

      this.props.onUserAdd();
    }
  }

  render() {
    return (
      <div>
        <input placeholder="New user" onKeyPress={ this.handleKeyPress } />
      </div>);
  }
}

class App extends React.Component {
  readonly onUserAdd = () => {
    this.setState({});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome, <br />dear Coffee-Consumer</h2>
        </div>
        <div className="App-intro">
          <CoffeeConsumeOverview items={users} />
        </div>
        <AddUser onUserAdd={this.onUserAdd} />
      </div>
    );
  }
}

export default App;
