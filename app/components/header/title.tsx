"use client";
import Link from "next/link";
import React from "react";

function Title() {
  return (
    <Link href='/'>
      <h1 className='title text-red-500 font-bold text-4xl text-center py-6'>
        LazyTube
      </h1>
    </Link>
  );
}

export default Title;
