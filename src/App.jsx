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
import { useAppContext } from "./context/AppContext";
import UserProfile from "./components/UserProfile.jsx";
import UserProfilOrders from "./components/UserProfilOrders.jsx";
import EditPorfil from "./pages/EditProfil.jsx";

export default function App() {

  const { loading } = useAppContext();

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
          ),
          children: [
            { index: true, element: <UserProfile /> },
            { path: "editProfil", element: <EditPorfil /> },
            { path: "profilorders", element: <UserProfilOrders /> }
          ]
        },
        { path: "wishes", element: <Wishes /> },
        {
          path: "cart",
          element: (
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          )
        }
      ]

    }
  ]);

  return <RouterProvider router={router} />;
}
