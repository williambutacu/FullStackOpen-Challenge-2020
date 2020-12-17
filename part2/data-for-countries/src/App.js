import React, { useState, useEffect } from 'react'
import axios from "axios";
import Country from './components/Country';
import ListCountries from './components/ListCountries';


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
    // console.log(query)
   
  }

  function handleClick(event) {
    setQuery(event.target.value)
  }

  const queryResults = countries.filter(country=>country.name.toLowerCase().startsWith(query.toLowerCase()))

  console.log(queryResults)



  return (
    <div>
    <label for="query-by-name">Search your country </label>
    <input name="query-by-name" value={query}
    onChange={handleChange} />
    <br></br>
    
    {queryResults.length===1 ? <Country src={queryResults} /> :
      queryResults.length>100 ? <p> Here your map will render</p> :
      queryResults.length>10 ? <p>Make a more specific query</p> : 
      
    <ul> {queryResults.map(result=>
    <ListCountries 
    result={result}
      key={result.name}
      handleClick={handleClick}
    />
    )} 
    </ul>
    }
    
      </div>
  )
}
