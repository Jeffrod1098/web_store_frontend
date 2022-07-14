import './App.css';
import 'bulma/css/bulma.css'
import { FaTshirt, FaShoppingCart} from 'react-icons/fa'
import Nav from './components/Nav/Nav.js'
import axios from 'axios'
import {useState, useEffect} from 'react'
import React from 'react'
import {Route, Routes, Link} from 'react-router-dom'
import Login from './components/Login/Login.js'
import ItemDetail from './components/ItemDetail/ItemDetail.js'
import SignUp from './components/SignUp/SignUp.js'

function App() {

  const [items, setItems] = useState([])

  React.useEffect(() => {
    async function getItems(){
      const response = await axios.get(
        'http://127.0.0.1:8000/items'
      )
      setItems(response.data)
    }
    getItems()
  }, [])

  
  return (
    <div className="App">
          <Nav/>
          <h1>WELCOME</h1>
          {items.map((item) => {
            return(
              <div>
                <h1>{item.name}</h1>
                <img src={item.photo_1_url}/>
                <h3>${item.price}.00</h3>
              </div>  
            )
          })}
      <main>
          <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='item/:id' element={<ItemDetail/>}/>
            <Route path='login' element={<Login/>}/>
            <Route/>
          </Routes>
      </main>  
    </div>
  );
}

export default App;
