import React from 'react'

import OpponentRock from './OpponentRock'

class RivalsRocks extends React.Component {

  render() {

    const { opponentRocks } = this.props
    
    return (
      <div className='RivalsRocks rocks_container'>
        {opponentRocks.nums.map((num, i) => 
          <OpponentRock 
            key={i} 
            setInTable={this.props.setInTable}
            nums={num}
            width={this.props.width}
            height={this.props.height}
            circleWidthHeight={this.props.circleWidthHeight}
          />
        )}
      </div>
    )
  }
}

export default RivalsRocks