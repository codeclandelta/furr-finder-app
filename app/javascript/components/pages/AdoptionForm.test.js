import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AdoptionForm from './AdoptionForm'

Enzyme.configure({adapter: new Adapter()})

describe("When Adoption Form renders", () => {
    let user = {id: 1}
    it("displays a form", () => {
    const aptNew = shallow(<AdoptionForm current_user={user}/>)
    const input = aptNew .find("Input")
    expect(input.length).toEqual(3)
  })
})