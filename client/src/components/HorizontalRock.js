import React from 'react'

import HorizontalCircles from './HorizontalCircles'

import '../styles/HorizontalRock.scss'

class HorizontalRock extends React.Component {
  render() {

    const { nums, width, height } = this.props

    return (
      <div 
        className='HorizontalRock Rock'
        style={{ width: `${height}px`, height: `${width}px` }}
        >
        <div className='circles_container'>
          <HorizontalCircles 
            num={nums[0]}
            width={Math.floor(height / 10)}
          />
        </div>
        <div className='divider'>
          <div></div>
        </div>
        <div className='circles_container'>
          <HorizontalCircles 
            num={nums[1]}
            width={Math.floor(height / 10)}
          />
        </div>
      </div>
    )
  }
}

export default HorizontalRock