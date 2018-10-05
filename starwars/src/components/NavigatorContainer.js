import React from 'react'
import Navigator from './Navigator'
import './StarWars.css'

const NavigatorContainer = ({ navigate, previous, next }) => (
  <div className="navigator-container">
    <Navigator navigate={navigate} text="previous" direction={previous} />
    <Navigator navigate={navigate} text="next" direction={next} />
  </div>
)

export default NavigatorContainer