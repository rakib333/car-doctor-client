import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Homepage/Home/Home";
import LoginLayout from "../Layouts/LoginLayout";
import RegisterLayout from "../Layouts/RegisterLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
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