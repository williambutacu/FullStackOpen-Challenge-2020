import React, { useEffect, useState } from 'react'
import AddPerson from './AddPerson'
import Phonebook from './Phonebook'
import Search from './Search'
import personService from "../services/srv"
import Notification from './Notification'

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
  const [message, setMessage] = useState("")

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

const personObject={
  name:newName.name,
  phone:newName.phone
}

function changeMessage(){
  setMessage(`${personObject.name} was added to the Phonebook`)
  setTimeout(()=>{
    setMessage(null)
  },5000)
}

function handleSubmit(event) {
  event.preventDefault();


  personService
    .create(personObject)
    .then(response=>{      
      setPersons(persons.concat(response))
      setNewName({name:"", phone:""})
    })

    changeMessage();

  
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
  const personToBeUpdated= persons.find(person=>person.name===newName.name)
  const id_update = personToBeUpdated.id
  const todo=window.confirm(`${newName.name} is already in the phonebook, replace the old number with a new one?`)?
  personService
  .update(id_update,personObject)
  .then(response=>setPersons(persons.map(person=>person.id !== id_update? person : response)))
  : alert(`${newName.name} wasn't updated`)
  todo? changeMessage() : alert("Nothing was changed")
}

function pAlreadyExist(event) {
  event.preventDefault();
  alert(`${newName.phone} already exists in the phonebook`)
}

function deletePersonId(id) {
  window.confirm("Are you sure you want to delete this person") ?
   personService
   .deletePerson(id)
   .then(setPersons(persons.filter(person=>person.id!==id))) 
   .catch(error=>{
     alert("User has already been removed")
   })
   : alert("Nobody was deleted")
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
      <Phonebook persons={persons}
        deletePersonId={deletePersonId}
      />
     <Notification message={message} />
    </div>
  )
}

export default App