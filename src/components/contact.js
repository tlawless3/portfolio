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
      <div id='contactInfo'>
        <a target='_blank' href='https://www.linkedin.com/in/thomas-lawless94/'>
          <Icon name='linkedin square' size='huge' />
        </a>
        <a target='_blank' href='https://github.com/tlawless3'>
          <Icon name='github square' size='huge' />
        </a>
        <a target='_blank' href='https://twitter.com/_thomasLawless'>
          <Icon name='twitter' size='huge' />
        </a>
      </div>
    </div>
  )
}

export default Contact
