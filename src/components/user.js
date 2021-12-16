import React from "react";
import "./user.css";

class User extends React.Component {
  render() {
    const name = `${this.props.detail.name}`
    return (
      <div className="user-name">{name}</div>
    )
  }
}

export default User;
