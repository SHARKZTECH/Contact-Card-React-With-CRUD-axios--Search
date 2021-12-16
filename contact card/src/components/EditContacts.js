import React,{useState,useEffect} from "react"
import {Link} from "react-router-dom";
import { useLocation } from 'react-router-dom'

const EditContacts=(props)=> {
  const location = useLocation()
  const {id,name,email}= location.state.contact;
  const [upstate,setupState]=useState({});
   
useEffect(()=>{
     setupState({id,name,email});
},[])

const update= (e)=>{
  e.preventDefault();
    if(upstate.name==="" || upstate.email ===""){
      alert("fill all fields pliz")
      return
    }
    console.log(upstate);
     props.editContactsHandler(upstate);
    // setupState({name:"",email:""});
       
  }
 
  return (
    <div className="ui main container">
       <Link to="/Contact-Card-React/" 
     className="ui green button">VIEW CONTACTS</Link> 
      <h1>Edit Contact</h1>
      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label>Name</label>
          <input type="text" name="name" 
          placeholder="name"
          value={upstate.name}
          onChange={(e)=> setupState({name:e.target.value})}/>
        </div>
        <div className="field">
          <label>Email</label>
          <input type="email" name="email"
           placeholder="email"
           value={upstate.email}
           onChange={(e)=> setupState({email:e.target.value})}/>
        </div>
       <button className="ui button blue">Save Changes</button>
      </form>
     
    </div>
  );
}


export default EditContacts;