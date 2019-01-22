import React from 'react'

import Circles from './Circles'

import '../styles/Rock.scss'

class Rock extends React.PureComponent {
  render() {

    const { nums } = this.props 

    return (
      <div className='Rock'>
        <div className='circles_container'>
          <Circles num={nums[0]}/>
        </div>
        <div className='divider'>
          <div></div>
        </div>
        <div className='circles_container'>
          <Circles num={nums[1]}/>
        </div>
      </div>
    )
  }
}

export default Rock