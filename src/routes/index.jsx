import { createBrowserRouter } from "react-router-dom"
import MainLayout from "~/layouts/main";
import Explore from "~/pages/explore";
import Home from "~/pages/home";
import Messages from "~/pages/messages";
import Notifications from "~/pages/notifications";
import Profile from "~/pages/profile";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'explore',
                element: <Explore />
            },
            {
                path: 'notifications',
                element: <Notifications />
            },
            {
                path: 'messages',
                element: <Messages />
            },
            {
                path: 'profile',
                element: <Profile />
            }
        ]
    },

])

export default routes;