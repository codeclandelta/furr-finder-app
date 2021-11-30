import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AnimalsIndex from './AnimalsIndex'

Enzyme.configure({ adapter: new Adapter() })

describe('when index renders', () => {
  it('displays a header', () => {
    const indexHeader = shallow(<AnimalsIndex />).find('h3')
    expect(indexHeader.text()).toEqual('Adoptable Pets')
  })
})
