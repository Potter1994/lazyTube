const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm mb-4`}>
      <div className='flex w-full h-full justify-center items-center'>
        <div className='picture w-[200px] h-[200px] bg-gray-300 rounded-full animate-pulse' />
        <div className='flex p-4 flex-col'>
          <div className='ml-2 h-6 w-3xs rounded-md bg-gray-300 text-sm font-medium mb-2 animate-pulse' />
          <div className='ml-2 h-6 w-3xs rounded-md bg-gray-300 text-sm font-medium mb-2 animate-pulse' />
          <div className='ml-2 h-6 w-3xs rounded-md bg-gray-300 text-sm font-medium mb-2 animate-pulse' />
          <div className='ml-2 h-6 w-3xs rounded-md bg-gray-300 text-sm font-medium mb-2 animate-pulse' />
        </div>
      </div>
    </div>
  );
}
