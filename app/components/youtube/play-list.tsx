import { SearchType, useYoutubeStore } from "@/app/hook/useYoutubeStore";
import YoutubePlayer from "./youtubePlayer";
// import YoutubeChannel from "./youtubeChannel";

function PlayList({ list }: { list: SearchType[] }) {
  const videoStatistics = useYoutubeStore((state) => state.videoStatistics);

  return (
    <div className='mx-auto grid grid-cols-4'>
      {!!list?.length &&
        list.map((i: SearchType, idx: number) => {
          if (i.id?.channelId) return null;
          // return <YoutubeChannel key={i.id?.channelId} info={i} />;
          return (
            <YoutubePlayer
              key={`${i.etag}-${idx}`}
              info={i}
              videoStatistics={videoStatistics[i.id?.videoId]}
            />
          );
        })}
    </div>
  );
}

export default PlayList;
