import React, {
  Component
} from 'react'
import {
  Card,
  Image,
  Grid
} from 'semantic-ui-react'

const PortfolioPieces = () => {
  let pieces = [{
    imageUrl: 'assets/boozy.jpg',
    name: 'Boozy',
    description: 'A fully fledged e-commerce website. Customers can peruse and purchase wines.',
    url: 'https://boozy-store.herokuapp.com'
  }, {
    imageUrl: 'assets/jumpman.jpg',
    name: 'Jumpman',
    description: "An uncopyrighted romp through the electrician Jumpman's world.",
    url: 'https://github.com/tlawless3/jumpman'
  }, {
    imageUrl: 'assets/game-o-matic.jpg',
    name: 'Game-O-Matic',
    description: 'Compare the availability and price of games on two different digital storefronts.',
    url: 'https://game-o-matic.herokuapp.com'
  }, {
    imageUrl: 'assets/thebriefing.jpg',
    name: 'The Briefing',
    description: 'A news analysis website, plug in an article and see how others are reporting on the subject.',
    url: 'https://thebriefing.herokuapp.com/'
  }];
  return (<
    div id='portfolioCardsWrapper' >
    <
    div id='portfolioTitle' >
      <
    p > Portfolio < /p> < /
    div > <
    Card.Group stackable={
            true
          }
          itemsPerRow={
            2
          } > {
            pieces.map((piece, index) => {
              return (<
          Card key={
                  index
                }
                className='portfolioCard' >
                <
          a target="_blank"
                  href={
                    piece.url
                  } >
                  <
                    Image fluid src={
                      piece.imageUrl
                    }
                  /> < /
          a > <
          Card.Content >
                    <
          Card.Header > {
                        piece.name
                      } <
          /Card.Header> <
          Card.Description > {
                          piece.description
                        } <
          /Card.Description> < /
          Card.Content > <
          /Card>
                      )
                    })
    } <
    /Card.Group> < /
    div >
                      )
                    }
                    
export default PortfolioPieces