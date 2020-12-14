import React from 'react'

export default function AddPerson({newName, nameExists, phoneExists, nAlreadyExist, pAlreadyExist, onChange, onSubmit}) {
    return (
        <div>
            <h2>Phonebook</h2>
      <form onSubmit={nameExists? nAlreadyExist : phoneExists? pAlreadyExist: onSubmit}>
        <div>
          <input value={newName.name} onChange={onChange} name="name"/>
        </div>
        <div>
          <input value={newName.phone} onChange={onChange} name="phone" />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
        </div>
    )
}
