import './PostT.css'
import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PostT = () => {

    const [name, setName] = useState('')
    const [details, setDetails] = useState('')
    const [price, setPrice] = useState('')
    const [photo_1_url, setPhoto_1_url] = useState('')
    const [photo_2_url, setPhoto_2_url] = useState('')


    const navigate = useNavigate()

    const submit = async (e) => {
        e.preventDefault()

        const response = await axios.post('http://127.0.0.1:8000/items', {
            name: name,
            price: price,
            details: details,
            photo_1_url: photo_1_url,
            photo_2_url: photo_2_url,

        })

    }


    return (
        <div className='postContainer'>
            <h1 className="title is-1 postTitle">POST YOUR T HERE</h1>


            <div className=" container has-text-centered box" style={{ maxWidth: '300px' }}>
                <form>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input className="input" name="name" type="text" placeholder="NAME OF YOUR T" required onChange={e => setName(e.target.value)} />
                        </div>
                    </div>


                    <div className="field">
                        <label className="label">DETAILS</label>
                        <div className="control">
                            <input className="input" name="DETAILS" type="text" placeholder="DETAILS" required onChange={e => setDetails(e.target.value)} />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label" htmlFor="email">PRICE</label>
                        <div className="control">
                            <input className="input" name="PRICE" type="text" placeholder="PRICE" required onChange={e => setPrice(e.target.value)} />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label" htmlFor="password">FRONT PIC URL</label>
                        <div className="control">
                            <input className="input" name="front" type="text" placeholder="URL FOR FRONT OF T" required onChange={e => setPhoto_1_url(e.target.value)} />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label" htmlFor="password">BACK PIC URL</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="URL FOR BACK OF T" required onChange={e => setPhoto_2_url(e.target.value)} />
                        </div>
                    </div>

                    <div className="field">
                        <div className="control buttons is-centered">
                            <div className="button is-medium is-info is-fullwidth" onClick={submit}>Post</div>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default PostT