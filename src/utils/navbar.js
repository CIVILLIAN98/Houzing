import React from "react";
import { Contactspage } from "../pages/Contactspage";
import { Homepage } from "../pages/Homepage";
import { Propertiespage } from "../pages/Propertiespage";
import useUniqueID from "../hooks/useID";
import HouseItempage from "../pages/HouseItempage";
import { Registerpage } from "../pages/Registerpage";
import { Profilepage } from "../pages/ProfilePage";
import Signin from "../components/Signin";
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
    element: <Signin />,
    path: "/login",
    private: false,
    hidden: true,
  },
  {
    id: useUniqueID,
    title: "Register page",
    element: <Registerpage />,
    path: "/register",
    private: false,
    hidden: true,
  },
  {
    id: useUniqueID,
    title: "Profile",
    element: <Profilepage />,
    path: "/profile",
    private: true,
    hidden: true,
  },
];

export default NavBar;
