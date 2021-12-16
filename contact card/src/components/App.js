import React,{useState,useEffect} from "react"
import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"

import api from "../api/contacts";
import Header from "./Header";
import AddContacts from "./AddContacts";
import ContactList from "./ContactList";
import ConctactDetail from "./ConctactDetail";
import EditContacts from "./EditContacts";


import {uuid} from "uuidv4";

function App() {
  //RETRIVE CONTACTS FROM API USING AXIOS 
  const retriveContacts=async ()=>{
    const response=await api.get("/contacts");
    return response.data;
  }
  const LOCAL_STORAGE_KEY="contacts";
const [contacts,setContacts]=useState([]);
const [searchTerm,setSearchTerm]=useState("");
const [searchResults,setSearchResults]=useState([]);


const addContactsHandler=async (contact)=>{
  const request={
    id:uuid(),
    ...contact
  }
  const response = await api.post("/contacts",request)
   setContacts([...contacts,response.data])
}
//ERROR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const editContactsHandler=(contact)=>{
  alert(contact.name+contact.email)
  // const response=await api.put(`/contacts/${contact.id}`,contact)
  // const {id,name,email}=response.data;
  // setContacts(
  //   contacts.map((contact)=>{
  //     return contact.id===id ? {...response.data} : contact;
  //   });
  // );
};
const removeContactHadler=async (id)=>{
  await api.delete(`/contacts/${id}`);
  const newContactList=contacts.filter((contact)=>{
    return contact.id !==id;
  });
  setContacts(newContactList)
  
}
///SEARCH FUNC
const searchHandler=(seachTerm)=>{
  setSearchTerm(seachTerm);
  if(searchTerm !== ""){
    const newContactList=contacts.filter((contact)=>{
      return Object.values(contact)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
     
    });
    setSearchResults(newContactList);
    }else{
      setSearchResults(contacts);
    }   
    
  }

useEffect(()=>{
  // const retrivedContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //  retrivedContacts && setContacts(retrivedContacts)
  const getAllContacts= async ()=>{
    const allContacts= await retriveContacts();
    allContacts && setContacts(allContacts);
  }
  getAllContacts();
},[]);
useEffect(()=>{
    // localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
},[contacts]);

  return (
    <Router>
    <Header/>
    <div className="ui container">
    
    <Routes>
    <Route path="/Contact-Card-React/" exact element={<ContactList contacts={searchTerm.length < 1 ? contacts: searchResults}
     getContactId={removeContactHadler} term={searchTerm} getSeachTerm={searchHandler}/> } />
    <Route path="/Contact-Card-React/add" element={<AddContacts addContactsHandler={addContactsHandler} />} />
    <Route path="/Contact-Card-React/edit" element={<EditContacts editContactsHandler={editContactsHandler} />} />

    <Route path="/Contact-Card-React/contact/:id" element={<ConctactDetail/>}/>
    </Routes>
     {/* <AddContacts addContactsHandler={addContactsHandler} />
    <ContactList contacts={contacts} getContactId={removeContactHadler}/> */}

  
        
    </div>
    </Router>
  );
}

export default App;
