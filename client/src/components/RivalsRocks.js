import React from 'react'

class RivalsRocks extends React.Component {

  render() {

    const div = <div className='Rock-container'><div className='Rock'></div></div>

    const drawAmountTime = (amountTime) => {
      const rows = [];
      let i = 0;
      while (++i <= amountTime) {
        rows.push(div)
      }
      return rows
    }

    return (
      <div className='RivalsRocks'>
        {drawAmountTime(this.props.rocksAmount)}
      </div>
    )
  }
}

export default RivalsRocks