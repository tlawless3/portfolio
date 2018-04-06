import React, {Component} from 'react'
import { Card, Image } from 'semantic-ui-react'

const PortfolioPieces = () => {
    let pieces = [ {
      imageUrl: '/src/assets/boozy.jpg',
      name: 'Boozy',
      description: 'A fully fledged e-commerce website. Customers can peruse and purchase wines.'
    }, {
      imageUrl: '/src/assets/jumpman.jpg',
      name: 'Jumpman',
      description: "An uncopyrighted romp through the electrician Jumpman's world"
    }, {
      imageUrl: '/src/assets/stash.jpg',
      name: 'Stash',
      description: 'An online inventory management system with an emphasis on a functional GUI'
    }, {
      imageUrl: '/src/assets/thebriefing.jpg',
      name: 'The Briefing',
      description: 'A news analysis website, plug in an article and see how others are reporting on the subject.'
    }];
    return (
      <div>
        {pieces.map( (piece, index) => {
          return (
            <Card key={index}>
              <Image src= {piece.imageUrl} />
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
      </div>
    )
}

export default PortfolioPieces
