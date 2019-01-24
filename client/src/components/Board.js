import React from 'react'
import { connect } from 'react-redux'

import OwnRocks from './OwnRocks'
import RivalsRocks from './RivalsRocks'
import Table from './Table'

import '../styles/Board.scss'

class Board extends React.Component {

  constructor(props) {
    super(props)

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
    console.log(e);
    if (!this.props.rocks.queue) {
      return
    }
    if (this.props.rocks.selected.length) {
      if (!e.currentTarget.classList.contains('selected')) {
        return
      }
    }
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const targetClone = target.cloneNode(true);
    // targetClone.style.position = 'absolute'
    targetClone.style.bottom = 0;
    targetClone.style.left = `${rect.left}px`;
    target.parentElement.removeChild(target);
    this.setInTable(targetClone);
  }

  setInTable(el) {
    const table = document.querySelector('.Table');
    el.firstChild.classList.remove('selected');
    el.style.bottom = `${table.offsetHeight / 2 - 50}px`
    el.style.left = `${table.offsetWidth / 2 - 25}px`
    table.appendChild(el);
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
          rocksAmount={this.props.rocks.rivalsRocksAmount} 
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
    rocks: state.rocks
  }
}

export default connect(mapStateToProps)(Board)