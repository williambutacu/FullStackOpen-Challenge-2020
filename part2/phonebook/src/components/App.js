import React, { useEffect, useState } from 'react'
import AddPerson from './AddPerson'
import Phonebook from './Phonebook'
import Search from './Search'
import axios from "axios"
import personService from "../services/srv"

const App = () => {

  const [ newName, setNewName ] = useState({
    name:"",
    phone:""
  })
  const [ persons, setPersons ] = useState([{
    name: "",
    phone:""
  }]) 
  const [search, setSearch] = useState("")

function hook(){
  personService
  .getAll()
  .then(initialPersons=>{
    setPersons(initialPersons)
  })
}

useEffect(hook,[])
  const nameExists= persons.filter(person=>person.name===newName.name).length>0;
  const phoneExists= persons.filter(person=>person.phone===newName.phone).length>0;


function handleChange(event) {
  const {value , name} = event.target;
  setNewName(prevValue=>{
    return { ...prevValue,
      [name]: value
    }
  })
}

function handleSubmit(event) {
  event.preventDefault();
  
  const personObject={
    name:newName.name,
    phone:newName.phone
  }
  setPersons(persons.concat(personObject))
  
  setNewName({name:"", phone:""})
}

function handleSearchChange(event) {
  setSearch(event.target.value)

}

function handleSearchSubmit(event){
  event.preventDefault();
  const searchExists= persons.filter(person=>person.name===search).length>0;
  return(searchExists? alert(`${search} is in the phonebook`): alert("There is no such contact"))
}



function nAlreadyExist(event) {
  event.preventDefault();
  alert(`${newName.name} already exists in the phonebook`)
}

function pAlreadyExist(event) {
  event.preventDefault();
  alert(`${newName.phone} already exists in the phonebook`)
}




return (
    <div>
    <Search onSubmit={handleSearchSubmit} onChange={handleSearchChange} search={search}/>
      <AddPerson newName={newName} nameExists={nameExists} phoneExists={phoneExists} 
        onChange={handleChange}
        onSubmit={handleSubmit}
        nAlreadyExist={nAlreadyExist}
        pAlreadyExist={pAlreadyExist}
      />
      <Phonebook persons={persons}/>
     
    </div>
  )
}

export default App