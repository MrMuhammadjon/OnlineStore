import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import Category from "./pages/Category.jsx";
import Search from "./pages/Search.jsx";
import Profile from "./pages/Profile.jsx";
import Wishes from "./pages/Wishes.jsx";
import Cart from "./pages/Cart.jsx";
import Login from "./pages/LoginPage.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "category", element: <Category /> },
        { path: "search", element: <Search /> },
        { path: "login", element: <Login /> },
        {
          path: "profile",
          element: (
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          )
        },
        {
          path: "wishes",
          element: <Wishes />
        },
        {
          path: "cart",
          element: (
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          )
        },
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}
