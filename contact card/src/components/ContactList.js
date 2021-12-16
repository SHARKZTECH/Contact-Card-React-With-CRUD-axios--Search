import React,{useRef} from "react"
import ContactCard from "./ContactCard";
import {Link} from "react-router-dom";

function ContactList(props) {
  const inputEl=useRef();
  const deleteContactHandler=(id)=>{
    props.getContactId(id);
  }
  const renderContactList=props.contacts.map((contact)=>{
    return(
      <ContactCard 
      key={contact.id} 
      contact={contact} 
      clickHandler={deleteContactHandler}/>
    );
  })
  const getSearchTerm=()=>{
      props.getSeachTerm(inputEl.current.value);
  }
  return (
    <div className="main">
     <Link to="/Contact-Card-React/add" 
     className="ui blue button">ADD CONTACT</Link>
     <br/><br/>
     <div className="ui search">
         <div className="ui icon input">
           <input type="text" placeholder="Search Contact" 
           className="ui prompt" 
           value={props.term} onChange={getSearchTerm}
           ref={inputEl}
           />
           <i className="ui search icon"></i>
         </div>
       </div>       
   <div className="ui celled list">
   {renderContactList.length > 0 ? renderContactList : "No contacts available" }
    </div>
    </div>
  );
}

export default ContactList;