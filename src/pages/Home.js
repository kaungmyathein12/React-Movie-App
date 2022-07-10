import React from "react";
import ReactLoading from "react-loading";
import { useCurrentFetch } from "../hooks/useCurrentFetch";
import { useGetTrailer } from "../hooks/useGetTrailer";
import CurrentMovie from "../components/CurrentMovie";
import MoiveList from "./MoiveList";
import { url, apiKey } from "../apiConfig";
function Home() {
  const currentMovieUrl = `${url}now_playing?api_key=${apiKey}`;
  const nowPlayingUrl = `${url}now_playing?api_key=${apiKey}`;
  const popularUrl = `${url}popular?api_key=${apiKey}`;
  const upcomingUrl = `${url}upcoming?api_key=${apiKey}`;
  const { isPending, data, error, videoData } =
    useCurrentFetch(currentMovieUrl);
  const { code } = useGetTrailer(videoData);

  return (
    <div className="mb-16">
      {isPending && (
        <div
          className="flex flex-row justify-center items-center"
          style={{ height: 650 }}
        >
          <ReactLoading type="spin" color="gray" height={50} width={50} />
        </div>
      )}
      {error && (
        <div className="grid items-center text-center" style={{ height: 650 }}>
          <h3 className="text-xl font-medium text-white">{error}</h3>
        </div>
      )}
      {!isPending && data && code && (
        <>
          <CurrentMovie data={data} trailerCode={code} />
          <MoiveList url={nowPlayingUrl} title="Now Playing" id="NowPlaying" />
          <MoiveList url={popularUrl} title="Popular" id="Popular" />
          <MoiveList url={upcomingUrl} title="UpComing" id="UpComing" />
        </>
      )}
    </div>
  );
}

export default Home;
