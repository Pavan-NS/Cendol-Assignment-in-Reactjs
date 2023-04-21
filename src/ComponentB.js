import {useState} from 'react'

const ComponentB = props => {
  const [cendol, setCendol] = useState(props.cendol)
  const [color, setColour] = useState(true)

  const incrementCendol = () => {
    setCendol(cendol + 10)
  }

  const changeButtonClick = () => {
    setColour(!color)
  }

  const backgroundStyle = {
    backgroundColor: color ? 'red' : 'blue',
  }

  return (
    <div className="mi">
      <div className="main-container">
        <div style={backgroundStyle} className="counter-circle">
          <div className="count">{cendol}</div>
          <button type="button" onClick={incrementCendol} className="button">
            Click to increase counter
          </button>
        </div>
      </div>
      <button type="button" onClick={changeButtonClick} className="change-btn">
        Change Colour
      </button>
    </div>
  )
}

export default ComponentB
