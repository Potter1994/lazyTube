import Link from "next/link";
import { getChannelSections, getPlayListItems } from "../lib/action";
import MobileYoutubeList from "../components/youtube/mobileYoutubeList";
// import PlayList from "../components/youtube/play-list";

async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string> | undefined>;
}) {
  const { channelId } = (await searchParams) || {};
  const data = await getChannelSections(channelId);
  // console.log(data);
  const findPlayList: Record<string, string> & {
    contentDetails: { playlists: string[] };
  } = data.items.find(
    (i: { contentDetails?: { playlists: string[] } }) => i.contentDetails
  );

  const [playListId] = findPlayList.contentDetails.playlists;

  // console.log(playList);
  // const result = await getPlayListItems(playListId);
  // const adjustResult = result.map((i: Record<string, string> & {contentDetails: {}}) => {})
  // console.log(result.items[0].snippet);

  if (!channelId)
    return (
      <div className='bg-red-400 flex flex-col items-center h-lvh'>
        {/* <h2>Not Found</h2> */}
        <h2 className='text-4xl p-4'>找不到相關的頻道</h2>
        <Link href='/' className='border p-2 rounded-2xl'>
          返回首頁
        </Link>
      </div>
    );

  // id?: {
  //     kind: string;
  //     channelId?: string;
  //     videoId?: string;
  // };

  return (
    <div>
      <MobileYoutubeList />
      {/* <PlayList list={result.items} /> */}
    </div>
  );
}

export default Page;
