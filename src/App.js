import React, { Component } from 'react';
import Result from './components/result';
import User from './components/user';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: [],
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
          userDetails: data,
        })
      })
    fetch("https://api.github.com/users/LucyPinker/repos")
      .then(response => response.json())
      .then((data) => {
        this.setState({
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
          <div className="user">
            <img src={this.state.userDetails.avatar_url} className="user-img" alt="user avatar" />
            <h4 className="user-name">{this.state.userDetails.name}</h4>
            <a href={this.state.userDetails.html_url}>{this.state.userDetails.html_url}</a>
            <div className="user-details">
              <p className="user-detail"> Following: {this.state.userDetails.followers}</p>
              <p className="user-detail"> Following: {this.state.userDetails.following}</p>
              <p className="user-detail"> Public Repos: {this.state.userDetails.public_repos}</p>
            </div>
          </div>

          <div className="search">
            <input className="search-box" type="text" placeholder="Search repos..." value={this.state.search}
              onChange={this.handleSearch} />
          </div>

          <div className="results">
            {this.state.results.map((result) => {
              return <p className="result-item"><Result key={result.name} result={result} /></p>
            })}
          </div>

        </div>
      </div>
    );
  }
}

export default App;
