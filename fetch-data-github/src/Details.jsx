import React from 'react'

const Details = ({name, gender, city, country, picture}) => {
  return (
    <div>
        <h1>Student Details</h1>
        <img style={{height:'100px', width:'100px'}} src={picture} alt="user" />
        <p>Name: {name}</p>
        <p>Roll No: {gender}</p>
        <p>Subject: {city}</p>
        <p>Subject: {country}</p>
        
    </div>
  )
}

export default Details