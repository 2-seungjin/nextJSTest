import {useState} from 'react'
import NavBar from '../components/NavBar'

export default function Home() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number +1)}>+1</button>
      <button onClick={() => setNumber(number -1)}>-1</button>
      <NavBar />
    </div>
  )
}
