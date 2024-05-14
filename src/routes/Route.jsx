import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import LogIn from "./LogIn";

const router = createBrowserRouter([
    
    
    {
         path: "/",
    element: <LogIn />,
},

{
         path: "/Home",
    element: <Home />,
},
{
    path: "/about",
    element: <About/>,
}
  
])


export default router;