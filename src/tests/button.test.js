import React from 'react'
import Button from '../components/Button'
import {shallow} from "enzyme"


describe("<Button />", () => {
    it('renders w/out crashing', () => {
        const wrapper = shallow(<Button />)
        expect(wrapper).toHaveTextContent('LEARN MORE')
    })  
})
