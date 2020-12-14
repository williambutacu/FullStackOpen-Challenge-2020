import React from 'react'
import Part from './Part'
import Total from './Total'


export default function Content({parts}) {
    console.log(parts);
    return (
        <div>
        {parts.map(part=>  
        <Part key={part.id} 
                name={part.name}
                exercises={part.exercises}

        /> 
         )}
            <Total parts={parts} />

            
        </div>
    )
}