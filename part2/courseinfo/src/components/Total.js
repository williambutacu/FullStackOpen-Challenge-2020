import React, { useState } from 'react'

export default function Total({parts}) {
    console.log(parts)
    const exArray= []
    parts.map(part=>{return(
        exArray.push(part.exercises)
    )})
console.log(exArray)
    return (
        <div>

        {exArray.reduce((accumulator,reducer)=>{
            return(
                accumulator+reducer
            )
        })}


        </div>
    )
}
