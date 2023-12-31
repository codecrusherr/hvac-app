import Navbar from "./components/Navbar/Navbar.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Auth/Login.jsx";
import Register from "./pages/Auth/Register.jsx";
import Services from "./pages/HVAC Services/Services.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import "./index.scss";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/services",
        element: <Services />,
      },

      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },

  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
