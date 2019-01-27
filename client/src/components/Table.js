import React from 'react'

import HorizontalRock from './HorizontalRock'
import Rock from './Rock'

import '../styles/Table.scss'

class Table extends React.Component {
  render() {

    const { width, height, circleWidthHeight } = this.props

    return (
      <div className='Table'>
        <HorizontalRock 
          nums={[2, 6]}
          width={width}
          height={height}
          circleWidthHeight={circleWidthHeight}
        />
        <Rock 
          nums={[2, 6]}
          width={width}
          height={height}
          circleWidthHeight={circleWidthHeight}
        />
      </div>
    )
  }
}

export default Table