import React, {Component} from 'react'
import { useDrag} from 'react-dnd'
import {NavLink} from 'react-router-dom'
import {Button, Row, Col} from 'reactstrap'
import Card from 'react-bootstrap/Card'
import HTML5Backend from 'react-dnd-html5-backend'
import { BrowserRouter, Switch, Route } from 'react-router-dom'



class AnimalsprotectedIndex extends Component {
    render() {
    const {animals}=this.props

    const Types = {

    CARD: 'card'
  } ,
    const cardSource = {
    canDrag(props) {

      return props.isReady
    },
  
    isDragging(props, monitor) {
        
      return monitor.getAnimal().id === props.id
    },
  
    beginDrag(props, monitor, component) {

    const Animal = { id: props.id }
      return animals
    },

    endDrag(props, monitor, component) {
      if (!monitor.didDrop()) {

        return
      }

    const animal = monitor.getAnimal()
  

    const dropResult = monitor.getDropResult()

    CardActions.moveCardToList(animal.id, dropResult.listId)
    }
    }

     const collect = (connect, monitor) => ({
        connectDragSource: connect.dragSource()
    });
  
class Card {
    render() {
 
    const { id } = this.props

    const { isDragging, connectDragSource } = this.props
  
    return connectDragSource(
        <React.Fragment>
        <div className="page-body">
        I am a draggable card number {id}
        {isDragging && ' (and I am being dragged now)'}
        <h3>My Favorites</h3>
        <br />
        <br />
        <article className="cards">
                {animals && animals.map(animal => {
                    return (
                        <section className="card" key={apartment.id}>
                            <Card>
                                <Card.Img variant="top" src={animal.photo} alt="picture of animal"/>
                                <Card.Body>
                                    <Card.Title>{animal.name}</Card.Title>
                                    <Card.Text>Status: {animal.status}</Card.Text>
                                    <Card.Text>Species: {animal.species}</Card.Text>
                                    <Card.Text>Breed: {animal.breed}</Card.Text>
                                    <Card.Text>Age: {animal.age}</Card.Text>
                                    <Card.Text>Gender: {animal.gender}</Card.Text>
                                    <Card.Text>Size: {animal.size}</Card.Text>
                                    <Card.Text>Description: {animal.description}</Card.Text>
                                    <Card.Text>Spayed/Nutered: {(animal.spayed_neutered).toString()}</Card.Text>
                                    <Card.Text>House Trained: {(animal.house_trained).toString()}</Card.Text>
                                    <Card.Text>Special Needs: {(animal.special_needs).toString()}</Card.Text>
                                    <Card.Text>Contact Us: {animal.contact_info}</Card.Text>
                                    <Card.Text>Location: {animal.contact_location}</Card.Text>
                                    
                                </Card.Body>
                            </Card> 
                            <Button onClick={() => this.props.animalDelete(animal.id)}>Delete Favorite</Button>
              </section>
                    )
                })}
                   </article>
                   </div>
        </React.Fragment>
      )
    }
}
}
} 
export default AnimalsprotectedIndex
