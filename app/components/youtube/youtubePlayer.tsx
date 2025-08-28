import Image from "next/image";
import { SearchType, VideoStatistics } from "@/app/hook/useYoutubeStore";
import { formatPublishedAt, formatViewCount } from "@/app/lib/utils";
import { useState } from "react";

function YoutubePlayer({
  info,
  videoStatistics,
}: {
  info: SearchType;
  videoStatistics: VideoStatistics;
}) {
  const [embed, setEmbed] = useState(false);
  const id = info.id?.videoId;
  const { title, publishedAt, thumbnails } = info.snippet || {};

  return (
    <div
      className='flex items-center flex-col p-4 hover:bg-gray-400 transition-colors duration-300 rounded-2xl mb-4 text-text-color'
      onClick={() => {
        if (embed) return;
        setEmbed(true);
      }}>
      {embed ? (
        <iframe
          id='player'
          width='560'
          height='360'
          src={`https://www.youtube.com/embed/${id}`}
          allowFullScreen
          title={`${title ? "title" : "YouTube video player"}`}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        />
      ) : (
        <Image
          src={`${thumbnails.high.url}`}
          width={480}
          height={360}
          alt='thumbnails'
          className='w-full object-cover'
        />
      )}
      {typeof title === "string" && <p className='mt-1'>{title}</p>}
      <div className='video-info flex mr-auto mt-1'>
        <p>{formatViewCount(Number(videoStatistics?.viewCount))}</p>
        <span className='mx-2'> • </span>
        <p>{formatPublishedAt(publishedAt)}</p>
      </div>
    </div>
  );
}

export default YoutubePlayer;
