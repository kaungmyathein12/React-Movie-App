import ReactLoading from "react-loading";
import { useMovieList } from "../hooks/useMovieList";
import SwiperSlider from "../components/SwiperSlider";
function MoiveList({ url, title }) {
  const { isPending, data, error } = useMovieList(url);

  return (
    <div className="relative mb-20 z-20">
      <div className="px-5 lg:px-20 mt-16">
        {isPending && (
          <div className="flex flex-row justify-center items-center">
            <ReactLoading type="spin" color="gray" height={50} width={50} />
          </div>
        )}
        {error && (
          <div className="grid items-center text-center">
            <h3 className="text-xl font-medium text-white">{error}</h3>
          </div>
        )}

        {!isPending && data && (
          <>
            <h3 className="text-2xl text-white font-bold mb-10">{title}</h3>
            <SwiperSlider data={data} />
          </>
        )}
      </div>
    </div>
  );
}

export default MoiveList;
