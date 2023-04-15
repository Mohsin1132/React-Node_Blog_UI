import React from "react";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import  {createBrowserRouter , RouterProvider ,Outlet} from "react-router-dom";
import Home from "./pages/home/Home";


const Layout = () => {
  return (
      <div>
        <TopBar/>
        <Outlet />
      </div>
  )
}


const App = () => {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout />,
      children : [
        {
          path:'/',
          element:<Home />
        },
        {
          path:'/login',
          element: <Login />
        },
        {
          path:'/register',
          element:<Register />
        },
        {
          path : '/settings',
          element : <Settings />
        },
        {
          path :'/write',
          element: <Write />
        },
        {
          path :'/post/:postId',
          element : <Single />
        }
      ]
    }
  ])
  return (
      <>
    <RouterProvider router={router} />
      </>
  );
}

export default App;
