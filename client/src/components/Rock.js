import React from 'react'

import Circles from './Circles'

import '../styles/Rock.scss'

class Rock extends React.PureComponent {

  render() {

    const { nums, width, height } = this.props 

    const top = this.props.top ? { top: `${this.props.top}px` } : {};
    const left = this.props.left ? { left: `${this.props.left}px` } : {};
    
    return (
      <div 
        className={`verticalRock Rock ${this.props.className}`}
        onClick={this.props.onClick}
        style={{ width: `${width}px`, height: `${height}px`, ...top, ...left }}
        data-num0={nums[0]}
        data-num1={nums[1]}
      >
        <div className='circles_container'>
          <Circles 
            num={nums[0]}
            width={Math.floor(height / 10)}
          />
        </div>
        <div className='divider'>
          <div></div>
        </div>
        <div className='circles_container'>
          <Circles 
            num={nums[1]}
            width={Math.floor(height / 10)}
          />
        </div>
      </div>
    )
  }
}

export default Rock