import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from "./routes/Root";
import ErrorPage from './routes/ErrorPage.tsx';
import Tabuada from './routes/Tabuada.tsx';
import Lista from './routes/Lista.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "tabuada/:tabuadaId",
        element: <Tabuada />,
      },{
        path: "/",
        element: <Lista />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Root /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
