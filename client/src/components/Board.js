import React from 'react'
import { connect } from 'react-redux'

import Rock from './Rock'

import '../styles/Board.scss'

class Board extends React.Component {
  render() {
    return (
      <div className='Board'>
        {this.props.rocks.map((rock, i) => 
          <Rock key={i} nums={rock}/>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rocks: state.rocks
  }
}

export default connect(mapStateToProps)(Board)