import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "src/app/App.jsx";
import ErrorPage from "pages/errorPage/errorPage.jsx";
import "src/app/index.scss"
import Bridge from "pages/Bridge/Bridge.jsx";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage />,
        children:[
            {
                path:"bridge",
                element:<Bridge/>,

            }
        ]
    },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
