import React from 'react'

export default function ListCountries({result,handleClick}) {
    return (
        <div>
             <li>
                {result.name}
                <button value={result.name} onClick={handleClick}>show</button>
             </li>
            
            
        </div>
    )
}
