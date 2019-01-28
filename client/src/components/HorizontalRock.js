import React from 'react'

import HorizontalCircles from './HorizontalCircles'

import '../styles/HorizontalRock.scss'

class HorizontalRock extends React.Component {
  render() {

    const { nums, width, height, left, top } = this.props

    return (
      <div 
        className={`HorizontalRock Rock ${this.props.className ? this.props.className : '' }`}
        style={{ width: `${height}px`, 
                 height: `${width}px`, 
                 top: `${top}px`,
                 left: `${left}px` }}
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