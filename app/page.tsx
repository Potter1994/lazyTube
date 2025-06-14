import Header from "./components/header/header";
import PlayList from "./components/youtube/playList";
// import Login from "./components/login/login";

export default function Home() {
  return (
    <div>
      <Header />
      {/* <Login /> */}
      <PlayList />
      {/* <iframe
        width='560'
        height='315'
        src={`https://www.youtube.com/embed/Zbrw-_vK2Es`}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      /> */}
    </div>
  );
}
