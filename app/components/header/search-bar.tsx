"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRouter, useSearchParams } from "next/navigation";
import { useRef } from "react";

function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const params = new URLSearchParams(searchParams);

        if (inputRef.current) {
          params.set("query", inputRef.current.value);
        }

        // 直接 router 控制路徑，渲染頁面交給導向路徑自己去做 render
        router.push(`/result?${params.toString()}`);
      }}
      className='max-w-[640px] w-full h-10 flex'>
      <input
        ref={inputRef}
        name='search'
        type='text'
        placeholder='搜尋'
        className='w-full h-full bg-white border rounded-bl-3xl rounded-tl-3xl p-4 border-gray-300 focus-visible:outline-blue-300 text-black'
        defaultValue={searchParams.get("query") || ""}
      />
      <button className='right-0 w-14 h-10 cursor-pointer flex items-center top-0 justify-center bg-gray-200 rounded-br-3xl rounded-tr-3xl border border-gray-300'>
        <MagnifyingGlassIcon className='w-6 text-gray-800' />
      </button>
    </form>
  );
}

export default SearchBar;
