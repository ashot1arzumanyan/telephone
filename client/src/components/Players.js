import React from 'react'
import { connect } from 'react-redux'

import UserName from './UserName'
import playerSelection from '../actions/playerSelection'

import '../styles/Players.scss'

const Names = (props) => {
  console.log(props);
  return (
    <ul>
      {props.playersList.map(player => (
        <li 
          key={player}
          onClick={props.onClick}
          >{player}
        </li>
      ))}
    </ul>
  )
}

class Players extends React.Component {

  constructor(props) {
    super(props)

    this.handleClickPlayerName = this.handleClickPlayerName.bind(this)
  }

  handleClickPlayerName(e) {
    const name = e.target.innerText;
    this.props.playerSelection(name)
  }

  render() {
    return  (
      <div className='Players'>
        <UserName />
        <Names 
          playersList={this.props.playersList} 
          onClick={this.handleClickPlayerName}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    playersList: state.players.list
  }
}

export default connect(mapStateToProps, { playerSelection })(Players)