import React from 'react'

export default function Person({person}) {
    return (
        <p key={person.name}> {person.name} {person.phone}</p>

    )
}
