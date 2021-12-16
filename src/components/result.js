import React from "react";
import "./result.css";

class Result extends React.Component {
  render() {
  const name = `${this.props.result.name} - ${this.props.result.description}`
  return (
      <div className="result-name">{name}</div>
  )}
}

export default Result;
