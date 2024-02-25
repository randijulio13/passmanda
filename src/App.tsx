import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Member from "./pages/Member";
import { LayoutContextProvider } from "./contexts/LayoutContext";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/member",
        element: <Member />,
      },
    ],
  },
]);

const App = () => {
  return (
    <LayoutContextProvider>
      <RouterProvider router={router} />
    </LayoutContextProvider>
  );
};

export default App;
