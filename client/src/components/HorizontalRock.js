import React from 'react'

import HorizontalCircles from './HorizontalCircles'

import '../styles/HorizontalRock.scss'

class HorizontalRock extends React.Component {
  render() {

    const { nums, width, height, circleWidthHeight } = this.props

    return (
      <div 
        className='HorizontalRock Rock'
        style={{ width: `${width}px`, height: `${height}px` }}
        >
        <div className='circles_container'>
          <HorizontalCircles 
            num={nums[0]}
            width={circleWidthHeight}
          />
        </div>
        <div className='divider'>
          <div></div>
        </div>
        <div className='circles_container'>
          <HorizontalCircles 
            num={nums[1]}
            width={circleWidthHeight}
          />
        </div>
      </div>
    )
  }
}

export default HorizontalRock