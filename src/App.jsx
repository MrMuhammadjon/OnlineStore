import AnimatedNav from "./components/Navbar.jsx";
import Navbar from "./components/Navbar.jsx";
import { useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import Category from "./pages/Category.jsx";
import Search from "./pages/Search.jsx";
import Profile from "./pages/Profile.jsx";
import Wishes from "./pages/Wishes.jsx";
import Cart from "./pages/Cart.jsx";



export default function App() {
  const { isAuthenticated } = useSelector((state) => state.auth) // Assuming you have a useAuth hook to check authentication status
  console.log(isAuthenticated);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/category",
          element: <Category />,
        },
        {
          path: "/search",
          element: <Search />,
        },
        {
          path: "/Profile",
          element: <Profile />,
        },
        {
          path: "/wishes", 
          element: <Wishes />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ]
    }
  ])

  return (
    <>
      <Navbar />
      <RouterProvider router={router}/>
    </>
  );
}
