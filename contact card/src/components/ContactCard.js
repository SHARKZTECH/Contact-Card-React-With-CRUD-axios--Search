import React from "react";
import {Link} from "react-router-dom";
import user from "../images/user.png";

function ContactCard(props) {
    const {id ,name ,email }=props.contact;
  return (
      <div className="item" style={{display:"flex",position:"relative",padding:"1rem",fontSize:"1.4rem"}} >
         <img className="ui avatar image" src={user} alt="user" />
        <div className="content" >
          <Link to={`/Contact-Card-React/contact/${id}`}
          state={{contact:props.contact}}
              >
          <div className="header">{name}</div>
          <div>{email}</div>
          </Link>
          </div>

          <Link to={`/Contact-Card-React/edit`}
          state={{contact:props.contact}}
              >
          <i style={{color:"blue",position:"absolute",right:"4rem"}} 
          className="edit alternate outline icon"
          ></i>
           </Link>
           
          <i style={{color:"red",position:"absolute",right:"1rem"}} 
          className="trash alternate outline icon"
          onClick={()=>props.clickHandler(id)}
          ></i>
      </div>
  );
}

export default ContactCard;
