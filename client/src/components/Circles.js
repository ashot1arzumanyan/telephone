import React from 'react'

class Circles extends React.PureComponent {

  render() {

    const { num, width } = this.props

    const circle1_7 = num === 2 || num === 3 || num === 4 || num === 5 || num === 6; 
    const circle2_6 = num === 4 || num === 5 || num === 6;
    const circle3_5 = num === 6;
    const circle4 = num === 1 || num === 3 || num === 5;

    const showOrHide = (bool) => { 
      return bool ? ({ width: `${width}px`, height: `${width}px`}) : ({ visibility: 'hidden' }) 
    }

    return (
      <React.Fragment>
        <div>
          <div className='circle' style={showOrHide(circle1_7)}></div>
          <div className='circle' style={showOrHide(circle2_6)}></div>
        </div>
        <div>
          <div className='circle' style={showOrHide(circle3_5)}></div>
          <div className='circle' style={showOrHide(circle4)}></div>
          <div className='circle' style={showOrHide(circle3_5)}></div>
        </div>
        <div>
          <div className='circle' style={showOrHide(circle2_6)}></div>
          <div className='circle' style={showOrHide(circle1_7)}></div>
        </div>
      </React.Fragment>
    )
  }
}

export default Circles