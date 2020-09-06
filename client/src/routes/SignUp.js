// dependencies
import React from 'react'

const SignUp = () => {
    return (
        <div className="container sign-up">
            <div className="row">
                <div className="col s12">
                    <form>
                        <div className="row">
                            <div className="input-field col s6">
                                <span>First Name</span>
                                <input placeholder="Placeholder" id="first_name" type="text" className="validate" />
                            </div>
                            <div className="input-field col s6">
                                <span>Last Name</span>
                                <input id="last_name" type="text" className="validate" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <span>Username</span>
                                <input id="username" type="text" className="validate" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <span>Email</span>
                                <input id="email" type="email" className="validate" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <span>Password</span>
                                <input id="password1" type="password" className="validate" />
                            </div>
                            <div className="input-field col s6">
                                <span>Confirm Password</span>
                                <input id="password2" type="password" className="validate" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <button className="btn">
                                    Sign up
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp
