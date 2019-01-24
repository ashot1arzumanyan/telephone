import React from 'react'

import Rock from './Rock'

import '../styles/OwnRocks.scss'

class OwnRocks extends React.Component {

  render() {
    
    const { rocks } = this.props

    const select = (rock) => {
      return rocks.selected.some(r => (r[0] === rock[0] && r[1] === rock[1]) || (r[0] === rock[1] && r[1] === rock[0]) )
    }

    return (
      <div className='OwnRocks rocks_container'>
        {rocks.nums.map((rock, i) => 
          <Rock 
            key={i} 
            className={select(rock) ? 'selected': ''}
            onClick={this.props.onClick} 
            nums={rock}
            width={this.props.width}
            height={this.props.height}
            circleWidthHeight={this.props.circleWidthHeight}
          />
        )}
      </div>
    )
  }
}

export default OwnRocks