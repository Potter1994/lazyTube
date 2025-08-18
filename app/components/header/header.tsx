"use client";

import React from "react";
import Menu from "./menu";
import Title from "./title";
import SearchBar from "./search-bar";
// import Script from "next/script";

function Header() {
  return (
    <main className='header'>
      <div className='title-wrapper flex items-center justify-between px-10 max-w-8xl m-auto'>
        <Title />
        <SearchBar />
        <Menu />
        {/* <div className='g-signin2' data-onsuccess='onSignIn'></div> */}
      </div>
      {/* <Script
        src='https://accounts.google.com/gsi/client'
        async
        defer
        onLoad={() => {
          function onSignIn() {
            console.log("helolo");
          }
        }}
      /> */}
      {/* <Script
        onLoad={() => {
          function test() {
            console.log("test hello");
          }

          test();
        }}
      /> */}
    </main>
  );
}

export default Header;
