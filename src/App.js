import React, { Component } from 'react';
import Result from './components/result';
import User from './components/user';
import { GoRepo, GoProject, GoBook } from "react-icons/go";

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: {},
      results: [],
      allResults: [],
      search: ""
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/LucyPinker")
      .then(response => response.json())
      .then((data) => {
        this.setState({
          ...this.state,
          userDetails: data,
        })
      })
    fetch("https://api.github.com/users/LucyPinker/repos")
      .then(response => response.json())
      .then((data) => {
        this.setState({
          ...this.state,
          allResults: data,
          results: data,
        })
      })
  }

  handleSearch = (event) => {
    this.setState({
      search: event.target.value,
      results: this.state.allResults.filter((result) => new RegExp(event.target.value, "i").exec(result.name))
    })
  }

  render() {
    return (
      <div className ="app" >
        <div className="main">
          <User userDetails={this.state.userDetails} />
          <div className="search">
            <input className="search-box" type="text" placeholder="Search repos..." value={this.state.search}
              onChange={this.handleSearch} />
          </div>
          <div className="options" >
            <div className="option"><GoBook className='icon' />Overview</div>
            <div className="option"><GoRepo className='icon' />Repositories (<strong>{this.state.userDetails.public_repos}</strong>)</div>
            <div className="option"><GoProject className='icon' />Projects</div>
          </div>
          <div className="results">
            {this.state.results.map((result) => {
              return <Result result={result} key={result.name}/>
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
