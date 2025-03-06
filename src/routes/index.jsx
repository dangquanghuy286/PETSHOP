
// import PrivateRoutes from "../components/PrivateRoutes";
import LayoutDefault from "../layouts/LayoutDefault";
import Blog from "../pages/Blog";
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
import StoreAll from "../pages/Store/StoreALL";
import Detail from "../pages/Store/StoreDetail";
import StoreFeature from "../pages/Store/StroreFea";
import StoreLatest from "../pages/Store/StroreLatest";



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
                element: <Store />,
                children: [
                    {
                        index: true,
                        element: <StoreAll />
                    },
                    {
                        path: "feature_product",
                        element: <StoreFeature />
                    },
                    {
                        path: "lastest_products",
                        element: <StoreLatest />
                    },
                    {
                        path: ":id",
                        element: <Detail />
                    }
                ]
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
            {
                path: "blog",
                element: <Blog />
            },
        ]
    }
]