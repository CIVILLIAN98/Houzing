import React from "react";
import useUniqueID from "../hooks/useID";
import { Contactspage } from "../pages/Contactspage";
import { Homepage } from "../pages/Homepage";
import { Propertiespage } from "../pages/Propertiespage";

export const navbar = [
  {
    id: useUniqueID,
    title: "Home",
    element: <Homepage />,

    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useUniqueID,
    title: "Properties",
    element: <Propertiespage />,
    path: "/properties",
    private: false,
    hidden: false,
  },
  {
    id: useUniqueID,
    title: "Contacts",
    element: <Contactspage />,
    path: "/contacts",
    private: false,
    hidden: false,
  },
  {
    id: useUniqueID,
    title: "Login",
    element: <h1>Login</h1>,
    path: "/login",
    private: false,
    hidden: true,
  },
];
