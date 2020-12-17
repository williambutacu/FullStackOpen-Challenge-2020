import React, { useState, useEffect } from 'react'
import axios from "axios";


export default function App() {
  const [countries, setCountries] = useState([])
  const [query, setQuery] = useState("")

  function hookEffect(){
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response=>{
        setCountries(response.data)
      })
  }
  useEffect(hookEffect,[])

  function handleChange(event){
    setQuery(event.target.value)
    console.log(query)
   
  }

  const queryResults = countries.filter(country=>country.name.toLowerCase().startsWith(query))

  console.log(queryResults)



  return (
    <div>
    <label for="query-by-name">Search your country </label>
    <input name="query-by-name" value={query}
    onChange={handleChange} />
    <br></br>
    
    {queryResults.length>100 ? <p> Here your map will render</p> :
      queryResults.length>10 ? <p>Make a more specific query</p> : 
      
    <ul> {queryResults.map((result,i)=><li key={i}> {result.name}</li>)} </ul>}
    
      </div>
  )
}
