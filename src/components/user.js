import React from "react";
import "./user.css";

class User extends React.Component {
  render() {
    const name = `${this.props.detail.name}`
    const followers = `${this.state.userDetails.followers}`
    return (
      <><div className="user-name">{name}</div><div className="user-followers">{followers}</div></>
    )
  }
}

export default User;
