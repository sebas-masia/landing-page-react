import { useState } from 'react'


import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Jumbotron />
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center gap-4 mt-2">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
