import { createBrowserRouter } from "react-router-dom"
import { MainPage } from "./components/pages/MainPage/MainPage"
import { ProfilePage } from "./components/pages/ProfilePage/ProfilePage"

export const getRoutes = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainPage />,
            errorElement: <div>ERROR</div>
        },
        {
            path: "/main",
            element: <MainPage />,
            errorElement: <div>ERROR</div>
        },
        {
            path: "/user/:guid",
            element: <ProfilePage />,
            errorElement: <div>ERROR</div>
        }
    ])

    return router;
}