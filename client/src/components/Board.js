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

    this.top = null;
    this.right = null;
    this.bottom = null;
    this.left = null;

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
    if (!this.props.rocks.queue) {
      return
    }
    if (!this.props.rocks.selected.length) {
      return
    }
    if (!e.currentTarget.classList.contains('selected')) {
      return
    }
    const num0 = Number(e.currentTarget.dataset.num0);
    const num1 = Number(e.currentTarget.dataset.num1);
    this.setInTable(e.currentTarget, num0, num1);
    this.props.played([num0, num1]);
  }

  setInTable(target, num0, num1) {
    const targetClone = target.cloneNode(true);
    targetClone.classList.remove('selected');
    const table = document.querySelector('.Table');
    if (!this.top && !this.right && !this.bottom && !this.left) {
      if (num0 !== num1) {
        targetClone.style.transform = 'rotateZ(-90deg)';
        this.left = num0;
        this.right = num1
      } else {
        this.top = this.bottom = num0
      }
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