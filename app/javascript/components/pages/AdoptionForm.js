import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

class AdoptionForm extends Component {
  render() {
    return (
      <div>
        <Form
          action='mailto:codeclandelta@gmail.com'
          method='POST'
          encType='multipart/form-data'
          name='EmailForm'
        >
          <div className='fields'>
            <div className='field name'>
              <Input type='text' placeholder='Name' required></Input>
            </div>
            <div className='field email'>
              <Input type='email' placeholder='Email' required></Input>
            </div>
          </div>
          <div className='field'>
            <Input type='text' placeholder='Subject' required></Input>
          </div>
          <div className='field textarea'>
            <textarea
              cols='30'
              rows='10'
              placeholder='Message..'
              required
            ></textarea>
          </div>
          <div className='button-area'>
            <Button type='submit'>Send message</Button>
          </div>
        </Form>
      </div>
    )
  }
}
export default AdoptionForm
