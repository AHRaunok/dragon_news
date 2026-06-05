'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from "react-hook-form"
const Register = () => {

const registerfunction =async (data) => {
    // Register logic here
    // console.log('Email:', data.email);
    // console.log('Password:', data.password);
    console.log(data);
    const {name, email, password, photourl} = data;

    const { data: signUpData, error } = await authClient.signUp.email({
    name: name, // required
    email: email, // required
    password: password, // required
    image: photourl,
    callbackURL: "/",
    
});

                if(error){
                    alert("Registration error:", error.message);
                }
                if(signUpData){
                    alert("Registration successful:" + signUpData.user.email);
                }

}
 const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

    return (
        <div className='container mx-auto my-10  bg-gray-400 p-10 rounded-lg'>
            <form className='flex flex-col items-center justify-center' onSubmit={handleSubmit(registerfunction)}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <h1>REGISTER</h1>

                    <label className="label">Name</label>
                    <input type="text" className="input"  {...register("name", { required: "Name is required" })} placeholder="Name" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}


                    <label className="label">Photo URL</label>
                    <input type="text" className="input"  {...register("photourl", { required: "Photo URL is required" })} placeholder="Photo URL" />
                    {errors.photourl && <p className='text-red-500'>{errors.photourl.message}</p>}


                    <label className="label">Email</label>
                    <input type="email" className="input"  {...register("email", { required: "Email is required" })} placeholder="Email" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                    
                    <label className="label">Password</label>
                    <input type="password" className="input" {...register("password", { required: "Password is required" })} placeholder="Password" />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}



                    <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
            </form>
            <p className="mt-2 text-center ">Already have an account ? <Link href="/login" className="link link-hover">Login</Link>   </p>
        </div>
    );
};

export default Register;