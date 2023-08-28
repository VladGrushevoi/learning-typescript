import { createBrowserRouter } from "react-router-dom"
import { MainPage } from "./components/pages/MainPage/MainPage"
import { ProfilePage } from "./components/pages/ProfilePage/ProfilePage"
import { AdminPage } from "./components/pages/AdminPage/AdminPage"
import { useFakeWorkHour } from "./fake-data/fake-workHour"
import { AuthPage } from "./components/pages/AuthPage/AuthPage"

export const getRoutes = () => {
    const { workDays, addNewWorkHour } = useFakeWorkHour();
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainPage
                days={workDays.map(item => {
                    return {
                        name: item.day,
                        isWorkingDay: item.isWorkingDay,
                        times: item.times
                    }
                })}
            />,
            errorElement: <div>ERROR</div>,
             children: [
            //     {
            //         path:'/auth',
            //         element: <AuthPage />
            //     },
                {
                    path: "/main",
                    element: <MainPage
                        days={workDays.map(item => {
                            return {
                                name: item.day,
                                isWorkingDay: item.isWorkingDay,
                                times: item.times
                            }
                        })}
                    />,
                    errorElement: <div>ERROR</div>
                },
                {
                    path: "/user/:guid",
                    element: <ProfilePage />,
                    errorElement: <div>ERROR</div>
                },
            //     {
            //         path: "/administrator/:guid",
            //         element: <AdminPage 
            //             addNewHour={addNewWorkHour}
            //             days={
            //                 workDays.map(item => {
            //                     return {
            //                         name: item.day,
            //                         times: item.times
            //                     }
            //                 })
            //             }
            //         />,
            //         errorElement: <div>ERROR</div>
            //     }
             ]
        },
        {
            path:'/auth',
            element: <AuthPage />
        },
        {
            path: "/main",
            element: <MainPage
                days={workDays.map(item => {
                    return {
                        name: item.day,
                        isWorkingDay: item.isWorkingDay,
                        times: item.times
                    }
                })}
            />,
            errorElement: <div>ERROR</div>
        },
        // {
        //     path: "/user/:guid",
        //     element: <ProfilePage />,
        //     errorElement: <div>ERROR</div>
        // },
        {
            path: "/administrator/:guid",
            element: <AdminPage 
                addNewHour={addNewWorkHour}
                days={
                    workDays.map(item => {
                        return {
                            name: item.day,
                            times: item.times
                        }
                    })
                }
            />,
            errorElement: <div>ERROR</div>
        }
    ])

    return router;
}