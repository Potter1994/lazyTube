import React from "react";
import Menu from "./menu";
import Title from "./title";

function Header() {
  return (
    <main className='header'>
      <div className='title-wrapper flex items-center justify-between px-10 max-w-8xl m-auto'>
        <Title />
        <Menu />
      </div>
    </main>
  );
}

export default Header;
