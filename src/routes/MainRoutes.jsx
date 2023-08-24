import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Homepage/Home/Home";
import LoginLayout from "../Layouts/LoginLayout";
import RegisterLayout from "../Layouts/RegisterLayout";
import Checkout from "../pages/checkout/Checkout";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: 'bookings',
                element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
            }
        ]
    },
    {
        path: 'login',
        element: <LoginLayout></LoginLayout>
    },
    {
        path: 'register',
        element: <RegisterLayout></RegisterLayout>
    }
])

export default router;