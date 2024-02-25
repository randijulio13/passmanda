import { ReactNode, createContext, useContext, useState } from "react";

type LayoutContextType = {
  solid?: boolean;
  setSolid?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LayoutContext = createContext<LayoutContextType>({
  solid: false,
  setSolid: () => undefined,
});

export const LayoutContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [solid, setSolid] = useState(true);

  return (
    <LayoutContext.Provider value={{ solid, setSolid }}>
      {children}
    </LayoutContext.Provider>
  );
};

const useLayoutContext = () => {
  return useContext(LayoutContext);
};

export default useLayoutContext;
