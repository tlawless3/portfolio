import React, {Component} from 'react'
import { Card, Image, Grid } from 'semantic-ui-react'

const PortfolioPieces = () => {
    let pieces = [ {
      imageUrl: 'assets/boozy.jpg',
      name: 'Boozy',
      description: 'A fully fledged e-commerce website. Customers can peruse and purchase wines.'
    }, {
      imageUrl: 'assets/jumpman.jpg',
      name: 'Jumpman',
      description: "An uncopyrighted romp through the electrician Jumpman's world."
    }, {
      imageUrl: 'assets/stash.jpg',
      name: 'Stash',
      description: 'An online inventory management system with an emphasis on a functional GUI.'
    }, {
      imageUrl: 'assets/thebriefing.jpg',
      name: 'The Briefing',
      description: 'A news analysis website, plug in an article and see how others are reporting on the subject.'
    }];
    return (
      <div id='portfolioCardsWrapper'>
        <Card.Group stackable={true} itemsPerRow={2}>
        {pieces.map( (piece, index) => {
          return (
            <Card key={index} centered={true} className='portfolioCard'>
              <Image src={piece.imageUrl} />
              <Card.Content>
                <Card.Header>
                  {piece.name}
                </Card.Header>
                <Card.Description>
                  {piece.description}
                </Card.Description>
              </Card.Content>
            </Card>
          )
        })}
        </Card.Group>
      </div>
    )
}

export default PortfolioPieces
