import React from 'react'

export default function Country({src}) {
    const {name, languages,capital, population, flag} = src[0]
    console.log(languages)

    return (
        <div>
            <h1>{name}</h1>

            <br></br>

            <p>capital {capital}</p>
            <p>population {population}</p>

            <br></br>
            <h3>Languages</h3>
            <ul>
                {languages.map(result=>
                <li key={result.iso639_1}> {result.name}</li>
                )}
            </ul>
            <img src={flag} alt="flag" height="100"></img>
        </div>
    )
}
