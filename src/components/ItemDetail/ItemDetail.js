import React from 'react'
import './ItemDetail.css'
import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'



const ItemDetail = () => {

  const [item, setItem] = useState([])

  const{id} = useParams()

  React.useEffect(() => {
    async function getItem(){
      const response = await axios.get(
        `http://127.0.0.1:8000/item/${id}`
      )
      setItem(response.data)
    }
    getItem()
  }, [])

    return (
        <div>
            <h1>{item.name}</h1>
            <img src= {item.photo_1_url} />
            <img src= {item.photo_2_url} />
            <h2>${item.price}.00</h2>
            <h5>{item.details}</h5>



        </div>
    )
}

export default ItemDetail