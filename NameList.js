import React from 'react'
import Person from './Person'

function NameList() {
   const persons= [
       {
           id: 1,
           name: 'sk',
           age: 30,
           skill: 'React'
       },
       {
           id: 2,
           name: 'sajid',
           age: 34,
           skill: 'java'
       },
       {
           id: 3,
           name: 'azhar',
           age: 21,
           skill: 'javascript'
       }
   ]
   const personList = persons.map(person => <Person key ={person.id} person= {person}></Person>)
return <div>{personList}</div>    
}

export default NameList
