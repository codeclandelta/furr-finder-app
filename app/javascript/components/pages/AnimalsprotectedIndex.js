import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import { Row, Col, Button, Form, Input, FormGroup, Ranking} from 'reactstrap'
import {NavLink} from 'react-router-dom'




class AnimalsprotectedIndex extends Component {
      constructor (props){
        super(props);
        this.state = {
          favorites: [],
          animal_id: null,
          favorite_id: null
        }
        this.id_match = this.id_match.bind(this)
      }
      componentDidMount() {
        this.favoritesRead()
      }

      favoritesRead = () => {
        fetch('/favorites')
          .then((response) => response.json())
          .then((payload) => this.setState({ favorites: payload }))
          .catch((errors) => console.log('favorites read errors', errors))
      }

    //     handleClick = (props)=> {
    //     console.log(this.props)
    // }

  


    id_match = (id) => {
      this.setState({animal_id: id})
      this.state.favorites.map(data => {
        {if(this.state.animal_id === data.animal_id){
          this.props.favoriteDelete(data.id, data.animal_id, data.user_id)
        }}
      })
    }
    
    
    render () {
        const { animals , favorites, current_user}=this.props
        
        console.log("animalsprotectedindex", this.props)
        return (
        <React.Fragment>
        <h3>My Favorite Pets</h3>
        <div className='page-body'>
        <Row xs={1} md={3} className='g-4'>
          {favorites &&
            animals.map((animal) => {
              return (
                <Col key={animal.id}>
                  <Card >
                    <Card.Img
                      variant='top'
                      src={animal.photo}
                      alt='picture of animal'
                    />
                    <Card.Body>
                      <Card.Title>{animal.name}</Card.Title>
                      <Card.Text>{animal.description}</Card.Text>
                      <NavLink to={`/animalshow/${animal.id}`}>
                        See More{' '}
                      </NavLink>
            
                      <Button onClick={() => this.id_match(animal.id)}>Delete Animal</Button>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })}
        </Row>
      </div>
      </React.Fragment>       
        )
    }
}

export default AnimalsprotectedIndex