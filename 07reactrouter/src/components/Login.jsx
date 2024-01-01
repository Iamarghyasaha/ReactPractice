/* eslint-disable no-unused-vars */

import React from 'react';

const Login = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();

        let email = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;

        console.log(email, password);
    };
    return (
        <div className='h-screen flex  bg-white'>
            <div className=' bg-slate-100 w-full max-w-md m-auto rounded-lg border-4 border-orange-400 shadow-default py-10 px-16'>
                <h1 className='text-2xl font-medium mt-4 mb-12 text-center'>
                    Log in to your account 🔐
                </h1>

                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='Your Email'
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Your Password'
                        />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <button
                            className= " bg-orange-700 text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300 mr-5 text-sm"
                        >
                            Login
                        </button>
                        <button
                            className= " bg-orange-700  text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300 ml-5 text-sm"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;