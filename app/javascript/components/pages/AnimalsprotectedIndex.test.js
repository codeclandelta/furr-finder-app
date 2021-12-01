import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AnimalsprotectedIndex from './AnimalsprotectedIndex'


Enzyme.configure({adapter: new Adapter()})

describe('when animalprotectedindex renders', () => {
    it('displays a header', () => {
        const animalprotectedindexHeader = shallow(<AnimalsprotectedIndex />).find("h3")
        expect (animalprotectedindexHeader.text()).toEqual("My Favorites")
    })
})