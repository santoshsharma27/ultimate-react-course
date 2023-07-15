import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import About from "./components/About";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Error from "./components/Error";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
