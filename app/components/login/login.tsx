import React from "react";

function Login() {
  return (
    <div className='modal absolute bg-black/60 w-full h-full top-0 border-0 flex items-center justify-center'>
      <form className='bg-card-bg border-2 border-border-color p-6 w-80 rounded-2xl'>
        <h1 className='text-xl font-semibold text-text-color text-center mb-4'>
          Login
        </h1>
        <label htmlFor=''>
          Email :
          <input type='text' />
        </label>
      </form>
    </div>
  );
}

export default Login;
