import React from 'react'

import Rock from './Rock'

import '../styles/OwnRocks.scss'

class OwnRocks extends React.Component {

  render() {
    
    const { rocks } = this.props

    const select = (rock) => {
      console.log(rocks.selected, rock);
      return rocks.selected.some(r => (r[0] === rock[0] && r[1] === rock[1]) || (r[0] === rock[1] && r[1] === rock[0]) )
    }

    return (
      <div className='OwnRocks rocks_container'>
        {rocks.nums.map((rock) => 
          <Rock 
            key={`${rock[0]}${rock[1]}`} 
            className={select(rock) ? 'selected': ''}
            onClick={this.props.onClick} 
            nums={rock}
            width={this.props.width}
            height={this.props.height}
          />
        )}
      </div>
    )
  }
}

export default OwnRocks