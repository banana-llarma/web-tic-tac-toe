import { useState } from "react"
import "./Counter.scss"

const Counter = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div className="counter">
      <div className="counter__number">{counter}</div>
      <button className="counter__button"
        onClick={() => setCounter(counter + 1)}>
        click me
      </button>
    </div>
  )
}

export default Counter