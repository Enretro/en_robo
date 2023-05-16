import React, { Component } from 'react';
import Searchbox from '../components/Searchbox'
import Cardlist from '../components/Cardlist'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry';
// import { robots } from './robots';
import './App.css'

class App extends Component	{
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: ""
    }
    // console.log('constructor')
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.cypress.io/users')
      .then(response => response.json())
      .then((users) => {this.setState({robots: users})})
    // console.log('update')
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value})
  }

  render() {
    const { robots, searchField } = this.state
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return !robots.length ?
      <h1>Loading...</h1> :
      // console.log('render')
      (
      <div className="tc">
        <h1 className='f1'>RoboFriends</h1>
        <Searchbox onSearchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <Cardlist robots={filteredRobots}/> 
          </ErrorBoundry>
        </Scroll>
      </div>
      );
  }
}

export default App;
