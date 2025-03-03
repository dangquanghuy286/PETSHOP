
// import PrivateRoutes from "../components/PrivateRoutes";
import LayoutDefault from "../layouts/LayoutDefault";
import Contact from "../pages/Contact";
import Error404 from "../pages/Error404";
import Feature from "../pages/Feature";
import Home from "../pages/Home";
import Lastest from "../pages/Lastest";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Register from "../pages/Register";
import Store from "../pages/Store";



export const routes = [
    {
        path: "/",
        element: <LayoutDefault />,
        children: [
            {
                path: "/",
                element: <Home />
            }, {
                path: "categories",
                element: <Store />
            }, {
                path: "feature_product",
                element: <Feature />
            },
            {
                path: "lastest_products",
                element: <Lastest />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "*",
                element: <Error404 />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "logout",
                element: <Logout />
            },
        ]
    }
]