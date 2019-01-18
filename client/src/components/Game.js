import React from 'react'

import Players from './Players'
import Board from './Board'

import '../styles/Game.scss'

class Game extends React.Component {
  render() {
    return (
      <div className='Game'>
        <Board />
        <Players />
      </div>
    )
  }
}

export default Game