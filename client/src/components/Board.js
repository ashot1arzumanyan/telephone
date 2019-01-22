import React from 'react'
import { connect } from 'react-redux'

import OwnRocks from './OwnRocks'
import RivalsRocks from './RivalsRocks'

import '../styles/Board.scss'

class Board extends React.Component {
  render() {
    return (
      <div className='Board'> 
        <RivalsRocks rocksAmount={this.props.rocks.rivalsRocksAmount} />
        <OwnRocks rocks={this.props.rocks} />
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