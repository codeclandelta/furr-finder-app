import React from 'react'
import AboutUs from './AboutUs'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('When AboutUs renders', () => {
    it('displays a heading', () => {
      const aboutUs = shallow(<AboutUs />)
      const aboutUsHeading = aboutUs.find('h1')
      expect(aboutUsHeading.text()).toEqual('About Us')
    })
    it('displays a mission statement and bios', () => {
        const mission = shallow(<AboutUs />)
        const missionBios = mission.find('p')
        expect(missionBios.length).toEqual(5)
    })
    it('displays four founders', () => {
        const founders = shallow(<AboutUs />)
        const foundersHeading = founders.find('h6')
        expect(foundersHeading.length).toEqual(4)
    })
  })