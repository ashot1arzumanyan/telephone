import React from 'react'

import Rock from './Rock'

import '../styles/OwnRocks.scss'

class OwnRocks extends React.Component {

  constructor(props) {
    super(props)

    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick(e) {
    if (!this.props.rocks.queue) {
      return
    }
    if (this.props.rocks.selected.length) {
      if (!e.currentTarget.firstChild.classList.contains('selected')) {
        return
      }
    }
    console.log(e.currentTarget);
    const target = e.currentTarget;
    const targetClone = target.cloneNode(true);
    console.log(targetClone);
    target.parentElement.removeChild(target);
    const table = document.querySelector('.Table');
    table.appendChild(targetClone)
  }

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
            onClick={this.handleOnClick} 
            nums={rock}
          />
        )}
      </div>
    )
  }
}

export default OwnRocks