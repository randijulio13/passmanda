import { FaCalendar } from "react-icons/fa";
import { RiMapPin2Fill } from "react-icons/ri";

const UpcomingEvent = () => {
  return (
    <div>
      <h1 className="duration-200 text-xl px-4 md:px-16 py-4 font-black bg-gray-100 flex gap-4 items-center">
        <FaCalendar />
        Upcoming Event
      </h1>
      <div className="duration-200 flex h-40 px-4 md:px-16 gap-4 md:gap-8 items-center">
        <div className="flex flex-col justify-center items-center leading-none text-gray-400">
          <span className="text-4xl font-black">08</span>
          <span className="font-black tracking-tight">March</span>
        </div>
        <img
          src="https://picsum.photos/100/100"
          className="hidden md:block rounded shadow h-24 w-24"
        />
        <div>
          <h1 className="font-black text-tight text-xl">
            PANCA Lomba PASSMANDA
          </h1>
          <span className="text-gray-300 font-black flex gap-2 items-center">
            <RiMapPin2Fill />
            SMA Negeri 2 Palembang
          </span>
            <button className="mt-2 outline-none px-4 py-2 bg-black text-white focus:scale-105 hover:scale-105 duration-200 font-bold md:hidden">
              view detail
            </button>
        </div>
        <button className="ms-auto outline-none px-4 py-2 bg-black text-white focus:scale-105 hover:scale-105 duration-200 font-bold md:block hidden">
          view detail
        </button>
      </div>
    </div>
  );
};

export default UpcomingEvent;
