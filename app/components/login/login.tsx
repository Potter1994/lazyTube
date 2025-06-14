"use client";
import React from "react";

function Login() {
  return (
    <div className='modal absolute bg-black/60 w-full h-full top-0 border-0 flex items-center justify-center'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className='bg-card-bg border-2 border-border-color p-6 w-80 rounded-2xl'>
        <h1 className='text-xl font-semibold text-text-color text-center mb-4'>
          Login
        </h1>
        <div className='wrapper flex flex-col mb-4'>
          <label htmlFor='email' className='mb-2'>
            Email
          </label>
          <input
            id='email'
            type='text'
            className='border border-border-color rounded-md px-3 py-1'
          />
        </div>
        <div className='wrapper flex flex-col mb-4'>
          <label htmlFor='password' className='mb-2'>
            Password
          </label>
          <input
            id='password'
            type='text'
            className='border border-border-color rounded-md px-3 py-1'
          />
        </div>

        <button className='login bg-green-800 w-full rounded-md py-1 font-medium mt-2 cursor-pointer hover:bg-green-700/90 active:bg-green-800/90'>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
