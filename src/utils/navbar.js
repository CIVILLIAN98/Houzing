import React from "react";
import { Contactspage } from "../pages/Contactspage";
import { Homepage } from "../pages/Homepage";
import { Propertiespage } from "../pages/Propertiespage";
import useUniqueID from "../hooks/useID";
import HouseItempage from "../pages/HouseItempage";
const NavBar = [
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
    title: "Single Item",
    element: <HouseItempage />,
    path: "/properties/:id",
    private: false,
    hidden: true,
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

export default NavBar;
