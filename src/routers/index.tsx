import React from "react";
import { useRoutes } from "react-router-dom";
import { FOLDER_ROUTE, HOME_ROUTE, MESSAGE_ROUTE } from "./routers";
import HomePage from "../pages/home-page";
import FolderPage from "../pages/folder-page";
import MessagePage from "../pages/message-page";
import NotFoundPage from "../pages/not-found-page";
import Menu from "../components/menu";

export default function AppRouter() {
  let publicRoutes = useRoutes([
    {
      path: HOME_ROUTE,
      element: <HomePage />,
    },
    {
      path: FOLDER_ROUTE + '/:id',
      element: <FolderPage />,
    },
    {
      path: MESSAGE_ROUTE + '/:id',
      element: <MessagePage />,
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ]);

  return (
    <div className="container">
      <Menu />
      <section className="main-content">
        {publicRoutes}
      </section> 
    </div>
  );
};