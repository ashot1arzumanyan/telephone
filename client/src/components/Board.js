import React from 'react'
import { connect } from 'react-redux'

import OwnRocks from './OwnRocks'
import RivalsRocks from './RivalsRocks'
import Table from './Table'

import { played } from '../actions/gameActions'

import '../styles/Board.scss'

class Board extends React.Component {

  constructor(props) {
    super(props)

    this.firstStep = true;

    this.state = {
      rHeight: 100,
      rWidth: 50,
      cWidthHeight: 8
    }

    this.handleOnClick = this.handleOnClick.bind(this)
    this.setInTable = this.setInTable.bind(this)
    this.setRockSize = this.setRockSize.bind(this)
  }

  componentDidMount() {
    this.setRockSize()
  }

  handleOnClick(e) {
    if (this.props.opponentRocks.queue) {
      if (!this.props.rocks.queue) {
        return
      }
      if (this.props.rocks.selected.length) {
        if (!e.currentTarget.classList.contains('selected')) {
          return
        }
      }
    }

    this.setInTable(e.currentTarget);
  }

  setInTable(target) {
    const targetClone = target.cloneNode(true);
    targetClone.classList.remove('selected');
    target.parentElement.removeChild(target);
    const num0 = Number(targetClone.dataset.num0);
    const num1 = Number(targetClone.dataset.num1);
    if (this.props.rocks.queue) {
      this.props.played([num0, num1]);
    }
    const table = document.querySelector('.Table');
    targetClone.firstChild.classList.remove('selected');
    if (this.firstStep) {
      if (num0 !== num1) {
        targetClone.style.transform = 'rotatez(90deg)'
      }
      this.firstStep = false
    }
    table.appendChild(targetClone);
  }

  setRockSize() {
    const height = Math.floor(document.documentElement.offsetHeight / 8);
    const width = (height - 10) / 2;
    const circleWidthHeight = Math.floor(height / 10);
    this.setState({
      rHeight: height,
      rWidth: width,
      cWidthHeight: circleWidthHeight
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
          circleWidthHeight={this.state.cWidthHeight}
        />
        <Table />
        <OwnRocks 
          rocks={this.props.rocks} 
          onClick={this.handleOnClick}
          width={this.state.rWidth}
          height={this.state.rHeight}
          circleWidthHeight={this.state.cWidthHeight}
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