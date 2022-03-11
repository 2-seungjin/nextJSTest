import {useState} from 'react'
import NavBar from '../components/NavBar'

export default function Home() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <NavBar/>
      <h1>'home'</h1>

    </div>
  )
}

