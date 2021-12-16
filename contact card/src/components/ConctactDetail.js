import React from 'react'
import {Link} from "react-router-dom";
import { useLocation } from 'react-router-dom'
import user from "../images/user.png";

const ConctactDetail = (props) => {
    const location = useLocation()
    const {id,name,email}= location.state.contact;
       return (
        <div className='main'>
            <div className="ui card centered">
            <img className="ui image" src={user} alt="user" />
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
                </div> 
                <Link to="/Contact-Card-React/" >
                <button className='ui button blue center' style={{marginLeft:"35%"}}>BACK TO CONTACT LIST</button>  
                </Link>        
        </div>
    )
}

export default ConctactDetail
