
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import SearchResults from './SearchResults'
const Body = () => {

    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
        {
          path:"/gptSearch",
          element:<Browse/>
        },{
          path:"/searchResults",
          element:<Browse/>
        }
    ])

    

  return (
    <RouterProvider router={appRouter}/>
  )
}

export default Body
