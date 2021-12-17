import React from "react";
import "./result.css";
import TimeAgo from 'javascript-time-ago'
import ReactTimeAgo from 'react-time-ago'

class Result extends React.Component {
  render() {
  const name = `${this.props.result.name}`
  const description = `${this.props.result.description}`
  const language = `${this.props.result.language}`
  const updated = `${this.props.result.updated_at}`
  return (
    <><div className="result-name">{name}</div><div className="result-description">{description}</div><div className="result-language">{language}</div><ReactTimeAgo date={updated} locale="en-US" timeStyle="twitter" /></>
  )}
}


export default Result;
