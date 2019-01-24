import React from 'react'

class RivalsRocks extends React.Component {

  render() {

    const { rocksAmount, width, height } = this.props
    const div = <div className='Rock' style={{ width: `${width}px`, height: `${height}px` }}></div>

    const drawAmountTime = (amountTime) => {
      const rows = [];
      let i = 0;
      while (++i <= amountTime) {
        rows.push(div)
      }
      return rows
    }
    return (
      <div 
        className='RivalsRocks rocks_container' 
        >
        {drawAmountTime(rocksAmount)}
      </div>
    )
  }
}

export default RivalsRocks