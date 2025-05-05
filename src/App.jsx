import './App.css'
import { createBrowserRouter,Outlet } from 'react-router'
import Header from './Components/Header'
import Homepage from './Components/Homepage'
import WebDevelopment from './Components/WebDevelopment'

function App() {
  

  return (
    <>
     <Header />
     <Outlet />
    </>
  )
}

export default App

export const routerapp=createBrowserRouter([
  {
    path:"",
    element:<App />,
    children:[{
      path:"/",
      element:<Homepage/>

    },{
      path:"/web",
      element:<WebDevelopment/>

    }
   
     

    ]
  }
])
