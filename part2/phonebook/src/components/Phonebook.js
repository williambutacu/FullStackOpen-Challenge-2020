import React from 'react'
import Person from './Person'
import personService from "../services/srv"

export default function Phonebook({persons}) {

function deletePersonId(id) {
  window.confirm("Are you sure you want to delete this person") ? personService.deletePerson(id) : alert("Nobody was deleted")
}

    return (
        <div>
             <h2>Numbers</h2>
             <ul>
      {persons.map(person=>{
        return (
            <Person person={person}
            key={person.name}
            deletePerson={()=>deletePersonId(person.id)} />
        )
      })}
      </ul>
        </div>
    )
}
