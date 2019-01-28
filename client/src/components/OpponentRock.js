import React from 'react'
import { connect } from 'react-redux'

import deleteRock from '../actions/deleteOpponentRock'
import Circles from './Circles'

class OpponentRock extends React.Component {

  componentDidMount() {
    this.target = React.createRef()
  }

  render() {

    const { nums, width, height } = this.props 

    if (nums[0] !== 7) {
      setTimeout(() => {
        const num0 = Number(this.target.current.dataset.num0);
        const num1 = Number(this.target.current.dataset.num1);
        this.props.setInTable(num0, num1)
        this.props.dispatch(deleteRock([num0, num1]))
      }, 0);
    }

    const dataNum0 = nums[0] === 7 ? {} : { 'data-num0': nums[0] }
    const dataNum1 = nums[1] === 7 ? {} : { 'data-num1': nums[1] }

    return (
      <div 
        className='Rock verticalRock'
        style={{ width: `${width}px`, height: `${height}px` }}
        ref={this.target}
        {...dataNum0}
        {...dataNum1}
      >
        <div className='circles_container'>
          <Circles 
            num={nums[0]}
            width={Math.floor(height / 10)}
          />
        </div>
        <div className='divider'>
          {nums[0] === 7 ? null : <div></div>}
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

export default connect(null)(OpponentRock)