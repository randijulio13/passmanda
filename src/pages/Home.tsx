import { useEffect } from "react";
import UpcomingEvent from "../components/UpcomingEvent";
import Hero from "../components/Hero";
import useLayoutContext from "../contexts/LayoutContext";

const Home = () => {
  const { setSolid } = useLayoutContext();

  const handleScroll = () => {
    const position = window.scrollY;
    if (setSolid) setSolid(position > 50);
  };

  useEffect(() => {
    if (setSolid) setSolid(false);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full">
      <Hero />
      <UpcomingEvent />
    </div>
  );
};

export default Home;
