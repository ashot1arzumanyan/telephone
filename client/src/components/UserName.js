import React from 'react'
import { connect } from 'react-redux'

import '../styles/UserName.scss'

class UserName extends React.Component {

  render() {
    return (
      <div className='UserName'>
        {this.props.name}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.players.name
  }
}

export default connect(mapStateToProps)(UserName)