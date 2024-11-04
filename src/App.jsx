import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Components from './components/main'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='main'>TASTY BITE RESTRAUNT</h1>
      <div className='menu'>
        OUR MENU
      </div>
      <div id='para1'>
        Authentic Italian cuisine. 6 creative dishes from All from our stone even , all organic , all delicious
      </div>
      <div id='comp'>
          <div>
          <Components name = "Pizza Margherita" descripton = "saad" url = "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg"/>
          <Components name = "Spaghetti Carbonara" descripton = "saad" url = "/public/download (1).jpg"  />
          <Components name = "Lasagna" descripton = "saad" url = "/public/lasagna.jpg"  />
          </div>
          <div id='comp-2'>
            
          <Components name = "Risotto" descripton = "saad" url = "/public/risotto.jpg"  />
          <Components name = "Focaccia" descripton = "saad" url = "/public/focassica.jpg"  />
          <Components name = "Tiramisu" descripton = "saad" url = "/public/tiramisu.jpg"  />
          </div>
      </div>
    </>
  )
}

export default App
