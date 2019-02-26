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

    this.top = {
      num: Number,
      el: HTMLElement,
      isDuble: Boolean
    };
    this.right = {
      num: Number,
      el: HTMLElement,
      isDuble: Boolean
    };
    this.bottom = {
      num: Number,
      el: HTMLElement,
      isDuble: Boolean
    };
    this.left = {
      num: Number,
      el: HTMLElement,
      isDuble: Boolean
    };
    this.center = {
      num: Number,
      el: HTMLElement,
      isDuble: Boolean
    };
    this.duble = null;
    this.dubles = [];

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

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevState);
  // }

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
    if (!this.state.first.length) {
      if (num0 === num1) {
        this.left = this.right = {num: num0, isDuble: true}
      } else {
        this.left = {num: num0, isDuble: false};
        this.right = {num: num1, isDuble: false}
      }
      return this.setState({ first: [num0, num1] })
    }

    if (!this.duble && num0 === num1) {
      this.dubles.push(num0)
    }

    const howMany = this.checkHowMany(num0, num1);
    console.log(howMany);
    if (howMany.length === 1) {
      const sideName = howMany[0];
      this[sideName].num === num0 || this.setState({ [sideName]: [num1, num0] })  
    }

  }

  checkHowMany(num0, num1) {
    const matched = [];
    this.compareSide('top', num0, num1) || matched.push('top');
    this.compareSide('right', num0, num1) || matched.push('right');
    this.compareSide('bottom', num0, num1) || matched.push('bottom');
    this.compareSide('left', num0, num1) || matched.push('left');
    return matched;
  }

  compareSide(sideName, num0, num1) {
    return this[sideName].num === num0 || this[sideName].num === num1
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