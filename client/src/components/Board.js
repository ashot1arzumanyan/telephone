import React from 'react'
import { connect } from 'react-redux'

import '../styles/board.scss'

class Board extends React.Component {


  render() {
    return (
      <canvas 
        id='board'
        height={document.documentElement.offsetHeight} 
        width={document.documentElement.offsetWidth - 200}
        >
      </canvas>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rocks: state.rocks
  }
}

export default connect(mapStateToProps)(Board)