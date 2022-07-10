import React from "react";
import { imgUrl } from "../apiConfig";
import "./MovieDetail.css";
import "./reactParallax.css";
function MovieDetail({ data, code }) {
  const style = {
    height: 650,
    backgroundImage: `url(${imgUrl}${data.backdrop_path})`,
  };
  return (
    data &&
    code && (
      <div className="grid items-center bg-cover relative detail" style={style}>
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="grid grid-col-2 md:grid-cols-4 xl:grid-cols-6 mx-auto relative px-5 lg:px-20">
          <div className="xl:col-span-1 grid items-center">
            <img
              src={`${imgUrl}${data.poster_path}`}
              alt=""
              className="mb-5 hidden md:block md:mb-0"
            />
          </div>
          <div className="col-span-3 xl:col-span-5 md:ml-10">
            <h2 className="text-3xl font-bold mb-4">{data.original_title}</h2>
            <p className="mb-3">Release Date : {data.release_date}</p>
            <p className="mb-5 text-emerald-400 font-medium">
              Runtime : {data.runtime} minutes
            </p>
            <p
              className="text-lg leading-7.5 mb-8 overflow-y-scroll "
              style={{ maxHeight: 220 }}
            >
              {data.overview}
            </p>
            <div className=" grid grid-cols-2 gap-5 md:w-96">
              <a
                href={`https://www.youtube.com/watch?v=${code}`}
                rel="noopener noreferrer"
                target="_blank"
                className="bg-red-600 text-white text-lg font-bold rounded-md hover:bg-red-700 text-center btn"
              >
                Watch Trailer
              </a>
              <button className="bg-white text-black text-lg font-bold rounded-md hover:bg-gray-200 btn">
                Watch Now
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default MovieDetail;
