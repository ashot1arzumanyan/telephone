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
        left={props.x - props.width / 2}
        top={props.y - props.height / 2}
  
        width={props.width}
        height={props.height}
        className='position-absolute'
      />
    )          
  } else {
    return (
      <HorizontalRock 
        nums={[props.first[0], props.first[1]]}
        left={props.x - props.height / 2}
        top={props.y - props.width / 2}

        width={props.width}
        height={props.height}
        className='position-absolute'
      />
    )
  }
}

class Table extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      x: 0,
      y: 0
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

    const { width, height } = this.props

    return (
      <div className='Table'>
        <FirstRock 
          first={this.props.first}
          x={this.state.x}
          y={this.state.y}
          width={width}
          height={height}
        />
      </div>
    )
  }
}

export default Table