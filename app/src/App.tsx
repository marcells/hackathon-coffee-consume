import * as React from 'react';
import './App.css';

const logo = require('./logo.svg');

class User {
  name: string

  constructor(name: string) {
    this.name = name
  }
}

let users = [new User("David"), new User("Vladimir")]

interface ICoffeeConsumeOverviewProps {
  items: User[]
}

interface ICoffeeConsumeUserProps {
  user: User
}

class CoffeeConsumeUser extends React.Component<ICoffeeConsumeUserProps> {
  render() {
    return (
      <h1>{this.props.user.name}</h1>)
  }
}

class CoffeeConsumeOverview extends React.Component<ICoffeeConsumeOverviewProps> {
  render() {
    return (
      <table>
        {this.props.items.map(user => (
          <tr>
            <td>
              <CoffeeConsumeUser user={user} />
            </td>
          </tr>)
        )}
      </table>)
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <CoffeeConsumeOverview items={users} />
        </p>
      </div>
    );
  }
}

export default App;
