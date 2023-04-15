import React from "react";
import { Homepage } from "../pages/Homepage";
import { Propertiespage } from "../pages/Propertiespage";
import useUniqueID from "../hooks/useID";
import HouseItempage from "../pages/HouseItempage";
import { Registerpage } from "../pages/Registerpage";
import { MyFavoritepage } from "../pages/My_favoritePage";
import Signin from "../components/Signin";
import { MyProfilePage } from "../pages/My_profilePage";
import { MyPropertiesPage } from "../pages/My_propertiesPage";
import { AddNewHousePage } from "../pages/Add_new_housepage";
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
    element: <MyProfilePage />,
    path: "/profile",
    private: true,
    hidden: true,
  },
  {
    id: useUniqueID,
    title: "My Properties",
    element: <MyPropertiesPage />,
    path: "/myproperties",
    private: true,
    hidden: true,
  },
  {
    id: useUniqueID,
    title: "ADD NEW HOUSE",
    element: <AddNewHousePage />,
    path: "/myprofile/newhouse",
    private: true,
    hidden: true,
  },
  {
    id: useUniqueID,
    title: "EDIT NEW HOUSE",
    element: <AddNewHousePage />,
    path: "/myprofile/edithouse/:id",
    private: true,
    hidden: true,
  },
  {
    id: useUniqueID,
    title: "My favorite",
    element: <MyFavoritepage />,
    path: "/myfavorite",
    private: true,
    hidden: true,
  },
];

export default NavBar;
