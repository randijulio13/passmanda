import { useEffect } from "react";
import useLayoutContext from "../contexts/LayoutContext";

const Member = () => {
  const { setSolid } = useLayoutContext();

  useEffect(() => {
    if (setSolid) setSolid(true);
  }, []);
  
  return <div className="pt-20">Member</div>;
};

export default Member;
