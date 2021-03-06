import './App.css';
import 'bulma/css/bulma.css'
import { FaTshirt, FaShoppingCart} from 'react-icons/fa'
import Nav from './components/Nav/Nav.js'
import axios from 'axios'
import {useState, useEffect} from 'react'
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Login from './components/Login/Login.js'
import ItemDetail from './components/ItemDetail/ItemDetail.js'
import SignUp from './components/SignUp/SignUp.js'
import Explore from './components/Explore/Explore.js'
import PostT from './components/PostTee/PostT';
import Comment from './components/Comment/Comment';

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
        <Nav />
      <main>
          <Routes>
            <Route path='/' element={<Explore items={items}/>}/>
            <Route path='/item/:id' element={<ItemDetail  />}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signUp' element={<SignUp/>}/>
            <Route path='/postT' element={<PostT/>}/>
            <Route path='/comment/:id' element={<Comment/>}/>
          </Routes>
      </main>  
    </div>
  );
}

export default App;
