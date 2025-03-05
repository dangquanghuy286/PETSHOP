
// import PrivateRoutes from "../components/PrivateRoutes";
import LayoutDefault from "../layouts/LayoutDefault";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import Error404 from "../pages/Error404";
import Feature from "../pages/Feature";
import Home from "../pages/Home";
import Intro from "../pages/Intro";
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
            },
            {
                path: "/intro",
                element: <Intro />
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
            {
                path: "cart",
                element: <Cart />
            },
        ]
    }
]