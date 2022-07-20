import React, { useState } from "react";
import './Comment.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
const Comment = () => {


    const [content, setContent]= useState('')
    const [title, setTitle]= useState('')

    const navigate = useNavigate()

    const date = Date().toLocaleString()
    console.log(date)

    const{id} = useParams

    const submit = async (e) => {
        e.preventDefault()

        const response = await axios.post(`http://127.0.0.1:8000/comment/${id}`, {
            title: title,
            content: content,
            item: id,
            created: date,

        })

    }
    
    return (
        <div className="form ">
            <h1 className="title is-1 postTitle">Make Your comment here</h1>
            <div className="commentForm container has-text-centered box" style={{ maxWidth: '600px' }}>
                <form
                    onSubmit=''>

                    <div className="field">
                        <label className="label">Your name</label>
                        <div className="control">
                            <input className="input is-large" name="name" type="text" placeholder="Name" required onChange={e => setContent(e.target.value)} />
                        </div>
                    </div>

                    <div className="field">
                    <label className="label">Comment</label>
                    <div className="control">
                    <input className="input is-large" name="Comment about T" type="text" placeholder="Comment about T" required onChange={e => setTitle(e.target.value)} />
                    </div>
                </div>



                    <div className="field">
                        <div className="control buttons is-centered">
                            <input className="button is-medium is-info is-fullwidth" type="submit" value="Register" onClick={() => { navigate('/explore') }} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Comment