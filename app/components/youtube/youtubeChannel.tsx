"use client";

import { YoutubeChannelType, SearchType } from "@/app/hook/useYoutubeStore";
import { getChannelById, getChannelSections } from "@/app/lib/action";
import Image from "next/image";
import { useEffect, useState } from "react";

function YoutubeChannel({ info }: { info: SearchType }) {
  const [channel, setChannel] = useState<YoutubeChannelType | null>(null);

  useEffect(() => {
    async function handleChannel() {
      const data = await getChannelById(info.id?.channelId || "");
      setChannel(data);
    }

    handleChannel();
  }, [info.id?.channelId]);

  if (!channel) return;

  const { title, description, customUrl } = channel.snippet || {};
  const { subscriberCount } = channel.statistics || {};
  function displaySubscriber(count: string) {
    let num = Number(count);
    if (num <= 1000) return `${num}位訂閱者`;
    num = Number((num / 10000).toFixed(1));
    return `${num}萬位訂閱者`;
  }

  async function handleClickChannel() {
    if (!channel?.id) return;

    const data = await getChannelSections(channel.id);
    console.log(data);
  }

  return (
    <div
      className='flex items-center justify-center'
      onClick={handleClickChannel}>
      <Image
        src={channel.snippet?.thumbnails?.medium?.url || ""}
        width={240}
        height={240}
        alt='channel'
        className='rounded-full'
      />
      <div className='info flex flex-col ml-4'>
        <p>{title}</p>
        <div className='channel-info'>
          <p>{customUrl}</p>
          <p>{displaySubscriber(subscriberCount)}</p>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default YoutubeChannel;
