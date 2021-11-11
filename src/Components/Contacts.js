import React from 'react'
import Contact from './Contact';

function Contacts(props) {
  return (
    props.persons.map(contact => contact.firstname.indexOf(props.term) !== -1 ? <Contact key={contact.id} {...contact} remove={()=>props.remove(contact)}/> : <div></div>
    )
  )
}

export default Contacts;