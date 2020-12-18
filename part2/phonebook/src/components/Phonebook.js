import React from 'react'
import Person from './Person'

export default function Phonebook({persons,deletePersonId}) {



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
