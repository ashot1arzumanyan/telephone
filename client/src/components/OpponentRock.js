import React from 'react'
import { findDOMNode } from 'react-dom'

import Circles from './Circles'

class OpponentRock extends React.Component {

  render() {

    const { nums, width, height, circleWidthHeight } = this.props 

    if (this.props.queue && this.props.nums[0] !== 7) {
      setTimeout(() => {
        this.props.setInTable(findDOMNode(this))
      }, 0);
    }

    return (
      <div 
        className='Rock'
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <div className='circles_container'>
          <Circles 
            num={nums[0]}
            width={circleWidthHeight}
          />
        </div>
        <div className='divider'>
          {nums[0] === 7 ? null : <div></div>}
        </div>
        <div className='circles_container'>
          <Circles 
            num={nums[1]}
            width={circleWidthHeight}
          />
        </div>
      </div>
    )
  }
}

export default OpponentRock