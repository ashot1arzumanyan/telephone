import React from 'react'
import { connect } from 'react-redux'
import { createPortal } from 'react-dom'

import OwnRocks from './OwnRocks'
import RivalsRocks from './RivalsRocks'
import Table from './Table'

import { played } from '../actions/gameActions'

import '../styles/Board.scss'

class Board extends React.Component {

  constructor(props) {
    super(props)

    this.top = null;
    this.right = null;
    this.bottom = null;
    this.left = null;
    this.center = null;

    this.state = {
      rHeight: 100,
      rWidth: 50,
      tops: [],
      rights: [],
      bottoms: [],
      lefts: [],
      first: []
    }

    this.handleOnClick = this.handleOnClick.bind(this)
    this.setInTable = this.setInTable.bind(this)
    this.setRockSize = this.setRockSize.bind(this)
  }

  componentDidMount() {
    this.setRockSize()
  }

  handleOnClick(e) {
    if (!this.props.rocks.queue) {
      return
    }
    const num0 = Number(e.currentTarget.dataset.num0);
    const num1 = Number(e.currentTarget.dataset.num1);
    this.setInTable(num0, num1);
    this.props.played([num0, num1]);
  }

  setInTable(num0, num1) {
    if (!this.top && !this.right && !this.bottom && !this.left) {
      this.setState({ first: [num0, num1] })
    }
  }

  setRockSize() {
    const height = Math.floor(document.documentElement.offsetHeight / 8);
    const width = (height - 10) / 2;
    this.setState({
      rHeight: height,
      rWidth: width,
    })
  }

  render() {
    return (
      <div className='Board'> 
        <RivalsRocks 
          opponentRocks={this.props.opponentRocks} 
          setInTable={this.setInTable}
          width={this.state.rWidth}
          height={this.state.rHeight}
        />
        <Table 
          width={this.state.rWidth}
          height={this.state.rHeight}
          tops={this.state.tops}
          rights={this.state.rights}
          bottoms={this.state.bottoms}
          lefts={this.state.lefts}
          first={this.state.first}
        />
        <OwnRocks 
          rocks={this.props.rocks} 
          onClick={this.handleOnClick}
          width={this.state.rWidth}
          height={this.state.rHeight}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rocks: state.rocks,
    opponentRocks: state.opponentRocks
  }
}

export default connect(mapStateToProps, { played })(Board)