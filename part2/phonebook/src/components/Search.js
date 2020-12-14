import React from 'react'

export default function Search({search,onSubmit, onChange}) {



    return (
        <div>
            <h2>Search by name</h2>
    <form onSubmit={onSubmit}>
      <input value={search} onChange={onChange} />
      <button type="submit">Search</button>
    </form>
        </div>
    )
}
