import React from 'react'
import axois from 'axios'
import './SignUp.css'

const SignUp = () => {
    return(
        <div>
            <h1>SIGN UP</h1>
            <div className="container has-text-centered box" style={{ maxWidth: '300px' }}>
                <form
                onSubmit={e => {
                    e.preventDefault();
                    this.handleSubmit();
                }}>
                <div className="field">
                    <label className="label" htmlFor="email">Email</label>
                    <div className="control">
                    <input className="input" name="email" type="email" placeholder="email" required onChange='' />
                    </div>
                </div>

                <div className="field">
                    <label className="label" htmlFor="password">Password</label>
                    <div className="control">
                    <input className="input" name="password" type="password" placeholder="password" required onChange=''/>
                    </div>
                </div>

                <div className="field">
                    <div className="control buttons is-centered">
                    <input className="button is-medium is-info is-fullwidth" type="submit" value="Sign In" />
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp