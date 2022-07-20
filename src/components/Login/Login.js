import React, { useState  } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Login.css'

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')



// const submit = async (e) => {
//     e.preventDefault()
//     const response = await axios.post('http://127.0.0.1:8000/api/login',{
            
//         withCredentials: true,
//         headers:{
//             'Access-Control-Allow-Origin': '*', 'Content-Type':'application/json'
//         },
    
//         username: username,
//         password: password
//     },     
//     )
//     console.log(response)
// }
const navigate = useNavigate()


const submit = async(e) => {
    e.preventDefault()
    
    await fetch('http://127.0.0.1:8000/api/login', {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    
    
    navigate('/')
}

    return (
        <div className='form'>
            <h1>LOGIN</h1>
            <div className="container has-text-centered box" style={{ maxWidth: '300px' }}>
                <form
                    onSubmit={submit}>
                    <div className="field">
                        <label className="label" >Username</label>
                        <div className="control">
                            <input className="input" name="username" type="text" placeholder="username" required onChange={e => setUsername(e.target.value)} />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label" >Password</label>
                        <div className="control">
                            <input className="input" name="password" type="password" placeholder="password" required onChange={e => setPassword(e.target.value)} />
                        </div>
                    </div>

                    <div className="field">
                        <div className="control buttons is-centered">
                            <input className="button is-medium is-info is-fullwidth" type="submit" value="LOGIN"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login