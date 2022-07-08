import React from 'react'
import "../App.css";
import { useState } from 'react';
//import BasicUserCard from './BasicUserCard';

const Search = () => {
  const [text, setText] = useState("");
  const handleChange = (title) => {
    setText(title);

  }


  return (
    <div>
       <input className="search"  onChange={(e) => handleChange(e.target.value) } placeholder='🔍 Search for a contact..'/>
       
    </div>
  )
}

export default Search