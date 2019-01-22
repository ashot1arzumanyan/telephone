import React from 'react'

import Rock from './Rock'

class OwnRocks extends React.Component {
  
  render() {
    
    const { rocks } = this.props

    const select = (rock) => {
      return rocks.selected.some(r => (r[0] === rock[0] && r[1] === rock[1]) || (r[0] === rock[1] && r[1] === rock[0]) )
    }

    return (
      <div className='OwnRocks'>
        {rocks.nums.map((rock, i) => 
          <Rock 
            key={i} 
            className={select(rock) ? 'selected': ''} 
            nums={rock}
          />
        )}
      </div>
    )
  }
}

export default OwnRocks