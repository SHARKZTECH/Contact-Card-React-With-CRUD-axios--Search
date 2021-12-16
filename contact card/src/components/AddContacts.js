import React from "react"
import {Link} from "react-router-dom";

class AddContacts extends React.Component{
  state={
    "name":"",
    "email":""
  }  
     add= (e)=>{
     
    e.preventDefault();
    if(this.state.name==="" || this.state.email ===""){
      alert("fill all fields pliz")
      return
    }
    this.props.addContactsHandler(this.state);
    this.setState({name:"",email:""});
   console.log(this.props)   
  }
  render(){
  return (
    <div className="ui main container">
       <Link to="/Contact-Card-React/" 
     className="ui green button">VIEW CONTACTS</Link> 
      <h1>Add Contact</h1>
      <form className="ui form" onSubmit={this.add}>
        <div className="field">
          <label>Name</label>
          <input type="text" name="name" 
          placeholder="name"
          value={this.state.name}
           onChange={(e)=> this.setState({name : e.target.value})}/>
        </div>
        <div className="field">
          <label>Email</label>
          <input type="email" name="email"
           placeholder="email"
           value={this.state.email}
           onChange={(e)=> this.setState({email: e.target.value})}/>
        </div>
       <button className="ui button blue"> Add</button>
      </form>
     
    </div>
  );
}
}

export default AddContacts;