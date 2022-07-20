import React from 'react'
import './ItemDetail.css'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Comment from '../Comment/Comment.js'



const ItemDetail = () => {

  const [item, setItem] = useState([])

  const [content, setContent] = useState('')
  const { id } = useParams()




  React.useEffect(() => {
    async function getItem() {
      const response = await axios.get(
        `http://127.0.0.1:8000/item/${id}`
      )
      setItem(response.data)
    }
    getItem()
  }, [])

  const date = Date().toLocaleString()
  console.log(date)

  const submit = async(e) => {
    e.preventDefault()

    const response = await axios.post('http://127.0.0.1:8000/api/register/', {
        title: '',
        content: content,
        item: item.id,
        created: date 
    })

  }
  


  return (
    // <div>
    //     <h1>{item.name}</h1>
    //     <img src= {item.photo_1_url} />
    //     <img src= {item.photo_2_url} />
    //     <h2>${item.price}.00</h2>
    //     <h5>{item.details}</h5>
    //     <h2>LEAVE A COMMENT</h2>
    //     <Comment/>


    // </div>
    <div>
      <div className='imgholder'>
        <img className='imgcard' src={item.photo_1_url} />
        <img className='imgcard' src={item.photo_2_url} />
      </div>
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{item.name}</p>
              <p class="subtitle is-6">${item.price}.00</p>
            </div>
          </div>

          <div class="content">
            {item.details}

          </div>
        </div>
        <div class="card">
          <footer class="card-footer">
            <div href="#" class="card-footer-item">ADD TO CART</div>
            <div href="#" class="card-footer-item">
            <Link to={`/comment/${item.id}`}>

              COMMENT
            </Link>
              
              </div>
          </footer>
        </div>
      </div>


    </div>
  )
}

export default ItemDetail