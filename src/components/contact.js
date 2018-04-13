import React from 'react'
import { Icon } from 'semantic-ui-react'

const Contact = () => {
  return (
    <div id='contactInfoWrapper'>
      <div id='contactInfoBackground'>
      </div>
      <div>
        <p id='contactTitle'> Contact </p>
        <p id='email'>{'tlawless94@gmail.com'}</p>
      </div>
      <div id='conactInfo'>
        <Icon name='linkedin square' size='huge' />
        <Icon name='github square' size='huge' />
        <Icon name='codepen' size='huge' />
      </div>
    </div>
  )
}

export default Contact
