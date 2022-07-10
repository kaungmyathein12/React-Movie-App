import React from "react";
import { imgUrl } from "../apiConfig";
import "./CurrentMovie.css";
import "./reactParallax.css";
//img
import waveImg from "../assets/wave.svg";
function CurrentMovie({ data, trailerCode }) {
  return (
    <>
      {data && trailerCode && (
        <div className="currentMovie">
          <div
            className="relative bg-cover bg-top grid items-center h-full"
            style={{ backgroundImage: `url(${imgUrl}${data.backdrop_path})` }}
          >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="bg-none relative px-5 md:px-20 flex flex-col justify-between h-60 items-start z-20">
              <h2 className="text-4xl lg:text-5xl leading-10 mb-5 lg:mb-0 font-extrabold text-white">
                {data.original_title}
              </h2>
              <p className=" w-full md:w-2/4 text-gray-200 text-lg lg:text-xl mb-5 lg:mb-0">
                {data.overview.substring(0, 150)}...
              </p>
              <div className="grid grid-cols-2 gap-5 md:w-96">
                <a
                  href={`https://www.youtube.com/watch?v=${trailerCode}`}
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
            <img
              src={waveImg}
              alt=""
              className="absolute z-10 object-cover w-full wave"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default CurrentMovie;
