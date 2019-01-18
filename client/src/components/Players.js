import React from 'react'
import { connect } from 'react-redux'

import UserName from './UserName'

import '../styles/Players.scss'

const Names = (props) => {
  console.log(props);
  return (
    <ul>
      {props.playersList.map(player => (
        <li key={player}>{player}</li>
      ))}
    </ul>
  )
}

class Players extends React.Component {
  render() {
    console.log(this.props.playersList);
    return  (
      <div className='Players'>
        <UserName />
        <Names playersList={this.props.playersList} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    playersList: state.players.list
  }
}

export default connect(mapStateToProps)(Players)