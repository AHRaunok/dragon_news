'use client'

import Link from 'next/link';
import React from 'react';
import { useForm } from "react-hook-form"
const Login = () => {

const loginfunction = (data) => {
    // Login logic here
    console.log('Email:', data.email);
    console.log('Password:', data.password);
    console.log(data);
}
 const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

    return (
        <div className='container mx-auto my-10  bg-gray-400 p-10 rounded-lg'>
            <form className='flex flex-col items-center justify-center' onSubmit={handleSubmit(loginfunction)}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <h1>LOG-IN</h1>

                    <label className="label">Email</label>
                    <input type="email" className="input"  {...register("email", { required: "Email is required" })} placeholder="Email" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                    
                    <label className="label">Password</label>
                    <input type="password" className="input" {...register("password", { required: "Password is required" })} placeholder="Password" />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}



                    <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
            </form>
            <p className="mt-2 text-center ">Dont have an account ? <Link href="/register" className="link link-hover">Register</Link>   </p>
        </div>
    );
};

export default Login;