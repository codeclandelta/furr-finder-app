import React, {Component} from 'react'
import { useDrag} from 'react-dnd'
import {NavLink} from 'react-router-dom'
import {Button, Row, Col} from 'reactstrap'
import Card from 'react-bootstrap/Card'
import HTML5Backend from 'react-dnd-html5-backend'




class AnimalsprotectedIndex extends Component {
    render() {
    const {animals}=this.props
    // Drag sources and drop targets only interact
    // if they have the same string type.
    // You want to keep types in a separate file with
    // the rest of your app's constants.
    const Types = {
    CARD: 'card'
  } 
    /**
    * Specifies the drag source contract.
    * Only `beginDrag` function is required.
    */
    const cardSource = {
    canDrag(props) {
      // You can disallow drag based on props
      return props.isReady
    },
  
    isDragging(props, monitor) {
    // If your component gets unmounted while dragged
    // (like a card in Kanban board dragged between lists)
    // you can implement something like this to keep its
    // appearance dragged:
      return monitor.getAnimal().id === props.id
    },
  
    beginDrag(props, monitor, component) {
    // Return the data describing the dragged item
    const Animal = { id: props.id }
      return animals
    },

    endDrag(props, monitor, component) {
      if (!monitor.didDrop()) {
    // You can check whether the drop was successful
    // or if the drag ended but nobody handled the drop
        return
      }
    // When dropped on a compatible target, do something.
    // Read the original dragged item from getItem():
    const animal = monitor.getAnimal()
  
    // You may also read the drop result from the drop target
    // that handled the drop, if it returned an object from
    // its drop() method.
    const dropResult = monitor.getDropResult()
    // This is a good place to call some Flux action
    CardActions.moveCardToList(animal.id, dropResult.listId)
    }
    }
    /**
    * Specifies which props to inject into your component.
    */
     const collect = (connect, monitor) => ({
        connectDragSource: connect.dragSource()
    });
    
//     function collect(connect, monitor) {
//     return {
//     // Call this function inside render()
//     // to let React DnD handle the drag events:
//     connectDragSource: connect.dragSource(),
//     // You can ask the monitor about the current drag state:
//     isDragging: monitor.isDragging() 
//     }
//   }
  
class Card {
    render() {
    // Your component receives its own props as usual
    const { id } = this.props
  
    // These props are injected by React DnD,
    // as defined by your `collect` function above:
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
