import { useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import Category from "./pages/Category.jsx";
import Search from "./pages/Search.jsx";
import Profile from "./pages/Profile.jsx";
import Wishes from "./pages/Wishes.jsx";
import Cart from "./pages/Cart.jsx";

// Protected route component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "category", element: <Category /> },
        { path: "search", element: <Search /> },
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
          element: (
            <ProtectedRoute>
              <Wishes />
            </ProtectedRoute>
          ) 
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