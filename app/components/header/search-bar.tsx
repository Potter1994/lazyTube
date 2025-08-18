"use client";

import { useYoutubeStore } from "@/app/hook/useYoutubeStore";
import { searchVideoList } from "@/app/lib/action";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function SearchBar() {
  const { list, addList } = useYoutubeStore((state) => state);
  // console.log(list);
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const result = await searchVideoList(new FormData(e.currentTarget));
        // addList(["test"]);
        console.log(result);
      }}
      className='max-w-[640px] w-full h-10 flex'>
      <input
        name='search'
        type='text'
        placeholder='搜尋'
        className='w-full h-full bg-white border rounded-bl-3xl rounded-tl-3xl p-4 border-gray-300 focus-visible:outline-blue-300 text-black'
      />
      <button className='right-0 w-14 h-10 cursor-pointer flex items-center top-0 justify-center bg-gray-200 rounded-br-3xl rounded-tr-3xl border border-gray-300'>
        <MagnifyingGlassIcon className='w-6 text-gray-800' />
      </button>
    </form>
  );
}

export default SearchBar;
