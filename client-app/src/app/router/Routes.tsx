import { RouteObject, createBrowserRouter } from "react-router-dom";
import React from 'react'
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityDetails from "../../features/activities/details/ActivityDetails";
import ActivityForm from "../../features/activities/form/ActivityForm";
import App from "../layout/App";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "activities", element: <ActivityDashboard /> },
      { path: "activities/:id", element: <ActivityDetails /> },
      { path: "createActivity", element: <ActivityForm key="create"/> },
      { path: "manage/:id", element: <ActivityForm key="manage"/> }
      //   { path: "manage/:id", element: <ActivityForm key="manage" /> },
      //   { path: "profiles/:username", element: <ProfilePage /> },
      //   { path: "errors", element: <TestErrors /> },s
      //   { path: "not-found", element: <NotFound /> },
      //   { path: "server-error", element: <ServerError /> },
      //   { path: "*", element: <Navigate replace to="/not-found" /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
