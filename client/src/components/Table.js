import React from 'react'

import HorizontalRock from './HorizontalRock'
import Rock from './Rock'

import '../styles/Table.scss'

const FirstRock = (props) => {
  if (!props.first.length) {
    return null
  }

  if (props.first[0] === props.first[1]) {
    return (
      <Rock 
        nums={[props.first[0], props.first[1]]}
        left={props.x - (props.width + 10) / 2}
        top={props.y - (props.height +10) / 2}
  
        width={props.width}
        height={props.height}
        className='position-absolute'
      />
    )          
  } else {
    return (
      <HorizontalRock 
        nums={[props.first[0], props.first[1]]}
        left={props.x - (props.height + 10) / 2}
        top={props.y - (props.width + 10) / 2}

        width={props.width}
        height={props.height}
        className='position-absolute'
      />
    )
  }
}

const TopRocks = (props) => {
  let start = props.first[0] === props.first[1] ? props.heightPlus / 2 : props.widthPlus / 2;
  const firstStart = start;

  return props.tops.map((num, i) => {
    if (num[0] === num[1]) {
      if (i !== 0) {
        start += props.heightPlus
      } 
      return (
        <HorizontalRock 
          key={`${num[0]}${num[1]}`}
          nums={[num[0], num[1]]}
          left={props.x - firstStart}
          top={props.y - start}
          width={props.width}
          height={props.height}
          className='position-absolute'
        />
      )
    } else {
      if (i !== 0) {
        start += props.widthPlus
      }
      return (
        <Rock 
          key={`${num[0]}${num[1]}`}
          nums={[num[0], num[1]]}
          left={props.x - firstStart}
          top={props.y - start}
          width={props.width}
          height={props.height}
          className='position-absolute'
        />
      )
    }
  })
}

const RightRocks = (props) => {
  let start = props.first[0] === props.first[1] ? props.widthPlus / 2 : props.heightPlus / 2;
  const firstStart = start;

  return props.rights.map((num, i) => {
    if (num[0] === num[1]) {
      if (i !== 0) {
        start += props.widthPlus
      }
      return (
        <Rock 
          key={`${num[0]}${num[1]}`}
          nums={[num[0], num[1]]}
          left={props.x + start}
          top={props.y - firstStart}
          width={props.width}
          height={props.height}
          className='position-absolute'
        />
      )
    } else {
      if (i !== 0) {
        start += props.heightPlus
      }
      return (
        <HorizontalRock 
          key={`${num[0]}${num[1]}`}
          nums={[num[0], num[1]]}
          left={props.x + start}
          top={props.y - firstStart}
          width={props.width}
          height={props.height}
          className='position-absolute'
        />
      )
    }
  })
}

const BottomRocks = (props) => {
  let start = props.first[0] === props.first[1] ? props.widthPlus / 2 : props.heightPlus / 2;
  const firstStart = start;

  return props.bottoms.map((num, i) => {
    if (num[0] === num[1]) {
      if (i !== 0) {
        start += props.heightPlus
      }
      return (
        <Rock 
          key={`${num[0]}${num[1]}`}
          nums={[num[0], num[1]]}
          left={props.x - firstStart}
          top={props.y + start}
          width={props.width}
          height={props.height}
          className='position-absolute'
        />
      )
    } else {
      if (i !== 0) {
        start += props.widthPlus
      }
      return (
        <HorizontalRock 
          key={`${num[0]}${num[1]}`}
          nums={[num[0], num[1]]}
          left={props.x - firstStart}
          top={props.y + start}
          width={props.width}
          height={props.height}
          className='position-absolute'
        />
      )
    }
  })
}

const LeftRocks = (props) => {
  let start = props.first[0] === props.first[1] ? props.widthPlus / 2 : props.heightPlus / 2;
  const firstStart = start;
  return props.lefts.map((num, i) => {
    if (num[0] === num[1]) {
      if (i !== 0) {
        start += props.widthPlus
      }
      return (
        <Rock 
          key={`${num[0]}${num[1]}`}
          nums={[num[0], num[1]]}
          left={props.x - start - props.widthPlus}
          top={props.y - firstStart}
          width={props.width}
          height={props.height}
          className='position-absolute'
        />
      )
    } else {
      if (i !== 0) {
        start += props.heightPlus
      }
      return (
        <HorizontalRock 
          key={`${num[0]}${num[1]}`}
          nums={[num[0], num[1]]}
          left={props.x - start - props.heightPlus}
          top={props.y - firstStart}
          width={props.width}
          height={props.height}
          className='position-absolute'
        />
      )
    }
  })
}

class Table extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      x: 0,
      y: 0,
      topStart: 0,
      rightStart: 0,
      bottomStart: 0,
      leftStart: 0
    }
  }

  componentDidMount() {
    const table = document.querySelector('.Table');
    this.setState({
      x: table.offsetWidth / 2,
      y: (table.offsetHeight - this.props.height) / 2
    })
  }

  render() {

    const { width, height, first } = this.props
    const widthPlus = width + 10;
    const heightPlus = height + 10;
    const { x, y } = this.state
    console.log('x: ' + x, 'y: ' + y);
    
    return (
      <div className='Table'>
        <FirstRock 
          first={this.props.first}
          x={x}
          y={y}
          width={width}
          height={height}
        />
        <TopRocks 
          tops={this.props.tops}
          first={first}
          widthPlus={widthPlus}
          heightPlus={heightPlus}
          width={width}
          height={height}
          x={x}
          y={y}
        />
        <RightRocks 
          rights={this.props.rights}
          first={first}
          widthPlus={widthPlus}
          heightPlus={heightPlus}
          width={width}
          height={height}
          x={x}
          y={y}
        />
        <BottomRocks 
          bottoms={this.props.bottoms}
          first={first}
          widthPlus={widthPlus}
          heightPlus={heightPlus}
          width={width}
          height={height}
          x={x}
          y={y}
        />
        <LeftRocks 
          lefts={this.props.lefts}
          first={first}
          widthPlus={widthPlus}
          heightPlus={heightPlus}
          width={width}
          height={height}
          x={x}
          y={y}
        />

      </div>
    )
  }
}

export default Table