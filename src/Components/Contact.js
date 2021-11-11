import React from 'react'
import avatar from './name.png'

function Contact(props) {
  console.log(props)
  return (
    <div className='card col-md-6 col-sm-6 col-lg-4 col-xs-8'>
      <div className='card-body'>
        <img className='card-img-top' src={avatar} alt='name.png' height='400' width='400'/>
        <h3 className='card-title'>{props.firstname} {props.lastname}</h3>
        <h5 className='card-text'>{props.email}</h5>
        <button onClick={props.remove}>Delete</button>
      </div>
    </div>
  )
}

export default Contact;
