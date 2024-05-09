import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import PropertyDetails from "./PropertyDetails";

const router = createBrowserRouter([
    {
         path: "/",
    element: <Home classname="p-3 font-bold text-5xl"/>,
},
{
    path: "/about",
    element: <About/>,
},
{
    path: "/properties/:id",
    element: <PropertyDetails/>
}
  
])


export default router;