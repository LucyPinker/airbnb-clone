import React from "react";
import "./user.css";
import { BsPeople } from "react-icons/bs";
import { GoRepo } from "react-icons/go";



const User = (props) => {

  return (
    <div className="user">
      <img src={props.userDetails.avatar_url} className="user-img" alt="user avatar" />
      <h4 className="user-name">{props.userDetails.name}</h4>
      <a href={props.userDetails.html_url}>{props.userDetails.html_url}</a>
      <div className="user-details">
        <p className="user-detail"><BsPeople className='icon' /> Following: {props.userDetails.followers}</p>
        <p className="user-detail"> Following: {props.userDetails.following}</p>
        <p className="user-detail"><GoRepo className='icon' /> Public Repos: {props.userDetails.public_repos}</p>
      </div>
    </div>
  )
}

export default User;
