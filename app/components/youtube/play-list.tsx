import { YoutubeType } from "@/app/hook/useYoutubeStore";
import YoutubePlayer from "./youtubePlayer";
import YoutubeChannel from "./youtubeChannel";

function PlayList({ list }: { list: YoutubeType[] }) {
  // console.log(list);

  return (
    <div className='mx-auto grid grid-cols-4'>
      {!!list?.length &&
        list.map((i: YoutubeType) => {
          if (i.id?.channelId)
            return <YoutubeChannel key={i.id?.channelId} info={i} />;
          return <YoutubePlayer key={i.etag} info={i} />;
        })}
    </div>
  );
}

export default PlayList;
