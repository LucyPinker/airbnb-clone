import React from "react";
import "./result.css";
import { GoCode } from "react-icons/go";


class Result extends React.Component {
  render() {
  const name = `${this.props.result.name}`
  const description = `${this.props.result.description}`
  const language = `${this.props.result.language}`
  return (
    <div className="result-item">
      <div className="result-name">{name}</div>
      <div className="result-description">{description}</div>
      <div className="result-language"><GoCode className='icon' />{language}</div>
    </div>
  )}
}


export default Result;
