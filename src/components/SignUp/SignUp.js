import React from 'react'
import './SignUp.css'
import {useState,} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const SignUp = () => {

    const[name, setName] = useState('')
    const[username, setUsername] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword]= useState('')


    const navigate = useNavigate()

    const submit = async(e) => {
        e.preventDefault()

        const response = await axios.post('http://127.0.0.1:8000/api/register/', {
            name: name,
            username: username,
            email: email,
            password: password,
        })

    }


    //     return navigate('/login')



    return(
        <div className='form'>
            <h1>SIGN UP</h1>
            <div className=" container has-text-centered box" style={{ maxWidth: '300px' }}>
                <form
                onSubmit={submit}>

                <div className="field">
                    <label className="label"> Your Name</label>
                    <div className="control">
                    <input className="input" name="name" type="text" placeholder="Name" required onChange={e => setName(e.target.value)} />
                    </div>
                </div>


                <div className="field">
                    <label className="label">Username</label>
                    <div className="control">
                    <input className="input" name="username" type="text" placeholder="UserName" required onChange={e => setUsername(e.target.value)} />
                    </div>
                </div>
                <div className="field">
                    <label className="label" htmlFor="email">Email</label>
                    <div className="control">
                    <input className="input" name="email" type="email" placeholder="email" required onChange={e => setEmail(e.target.value)} />
                    </div>
                </div>

                <div className="field">
                    <label className="label" htmlFor="password">Password</label>
                    <div className="control">
                    <input className="input" name="password" type="password" placeholder="password" required onChange={e => setPassword(e.target.value)}/>
                    </div>
                </div>

                <div className="field">
                    <div className="control buttons is-centered">
                    <input className="button is-medium is-info is-fullwidth" type="submit" value="Register" onClick={() => {navigate('/login')}} />
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp