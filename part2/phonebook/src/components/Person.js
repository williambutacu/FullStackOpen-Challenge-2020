import React from 'react'

export default function Person({person, deletePerson}) {
    return (
        <li > {person.name} {person.phone}
        <button onClick={deletePerson}>delete</button>
        </li>

    )
}
