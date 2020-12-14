import React from 'react'
import Person from './Person'

export default function Phonebook({persons}) {
    return (
        <div>
             <h2>Numbers</h2>
      {persons.map(person=>{
        return (
            <Person person={person} />
        )
      })}
        </div>
    )
}
