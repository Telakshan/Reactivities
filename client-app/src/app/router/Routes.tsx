import { RouteObject, createBrowserRouter } from "react-router-dom";
import ActivityDetails from "../../features/activities/details/ActivityDetails";
import HomePage from "../../features/home/HomePage";
import App from "../layout/App";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
        { path: '', element: <HomePage /> },
       //{ path: "activities", element: <ActivityDashboard /> },
      { path: "activities/:id", element: <ActivityDetails /> },
    //   { path: "createActivity", element: <ActivityForm key="create" /> },
    //   { path: "manage/:id", element: <ActivityForm key="manage" /> },
    //   { path: "profiles/:username", element: <ProfilePage /> },
    //   { path: "errors", element: <TestErrors /> },
    //   { path: "not-found", element: <NotFound /> },
    //   { path: "server-error", element: <ServerError /> },
    //   { path: "*", element: <Navigate replace to="/not-found" /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
