import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/main.jsx';
import Player from './components/player.jsx';
import Players from './components/players.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Main></Main>,
    children:[
      {
        path:'/players',
        element:<Players></Players>,
        loader: ()=> fetch ('http://localhost:3000/phones')

      },{
        path:'/player/:id',
        element: <Player></Player>,
        loader: ({params}) =>fetch (`http://localhost:3000/phones/${params.id}`)

      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
