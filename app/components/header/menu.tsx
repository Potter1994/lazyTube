"use client";
import React, { useState } from "react";

const moonIcon = (
  <svg
    id='theme-toggle-dark-icon'
    className='w-4 h-4 text-text-color'
    aria-hidden='true'
    xmlns='http://www.w3.org/2000/svg'
    fill='currentColor'
    viewBox='0 0 18 20'>
    <path d='M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z'></path>
  </svg>
);

const sunIcon = (
  <svg
    id='theme-toggle-light-icon'
    className='w-4 h-4'
    aria-hidden='true'
    xmlns='http://www.w3.org/2000/svg'
    fill='currentColor'
    viewBox='0 0 20 20'>
    <path d='M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z'></path>
  </svg>
);

function Menu() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className='flex'>
      <button
        onClick={() => {
          const width = 500;
          const height = 600;
          const left = window.screen.width / 2 - width / 2;
          const top = window.screen.height / 2 - height / 2;
          const popup = window.open(
            "/api/login",
            "Google Login",
            `width=${width},height=${height},top=${top},left=${left}`
          );
          console.log(popup);
          // window.location.href = "/api/login";
        }}
        className='login border-3 border-border-color px-4 mr-4 bg-card-bg rounded-4xl cursor-pointer hover:bg-hover-bg active:bg-card-bg'>
        Login
      </button>

      <div className='switch-button'>
        <button
          className='theme border-3 border-border-color bg-card-bg w-10 h-10 flex items-center justify-center rounded-md hover:bg-hover-bg active:bg-card-bg cursor-pointer'
          onClick={() => {
            const html = document.documentElement;
            html.classList.toggle("dark", !darkMode);
            setDarkMode(!darkMode);
          }}>
          {darkMode ? sunIcon : moonIcon}
        </button>
      </div>
    </div>
  );
}

export default Menu;
