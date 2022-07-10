import React from "react";
import ReactLoading from "react-loading";
import { useGetTrailer } from "../hooks/useGetTrailer";
import MovieDetail from "../components/MovieDetail";
import { useParams } from "react-router-dom";
import { apiKey, url } from "../apiConfig";
import { useDetail } from "../hooks/useDetail";
import MoiveList from "./MoiveList";
function Detail() {
  const { id } = useParams();
  const currentUrl = `${url}${id}?api_key=${apiKey}`;
  const { isPending, data, error, trailerCode } = useDetail(currentUrl);
  const { code } = useGetTrailer(trailerCode);
  return (
    <div className="text-white relative w-full">
      {isPending && (
        <div
          style={{ height: 650 }}
          className="flex flex-row justify-center items-center"
        >
          <ReactLoading type="spin" color="gray" height={50} width={50} />
        </div>
      )}
      {error && (
        <div
          className="currentMovie grid items-center text-center"
          style={{ height: 650 }}
        >
          <h3 className="text-xl font-medium text-white">{error}</h3>
        </div>
      )}
      {code === null && (
        <div
          style={{ height: 650 }}
          className="flex flex-row justify-center items-center"
        >
          <ReactLoading type="spin" color="gray" height={50} width={50} />
        </div>
      )}
      {!isPending && data && code && (
        <>
          <MovieDetail data={data} code={code} />
          <MoiveList
            url={`${url}${data.id}/similar?api_key=${apiKey}`}
            title="Similar Movies"
          />
        </>
      )}
    </div>
  );
}

export default Detail;
