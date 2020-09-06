// dependencies
import React from 'react'

const SignIn = () => {
    return (
        <div className="container sign-in">
            <div className="row">
                <div className="col s12">
                    <form>
                        <div className="row">
                            <div className="input-field col s12">
                                <span>Username</span>
                                <input id="username" type="text" className="validate" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <span>Password</span>
                                <input id="password" type="password" className="validate" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <button className="btn">
                                    Sign in
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn
