import React from "react";
import * as FaIcon from "react-icons/fa";
import * as AiIcon from "react-icons/ai";
import * as IoIcon from "react-icons/io";
import * as RiIcon from "react-icons/ri";

export const SidebarData = [
  {
    title: "Juegos Populares",
    path: "/",
    icon: <AiIcon.AiFillHome />,
    subNav: [],
  },
  {
    title: "Generos",
    path: "#",
    icon: <FaIcon.FaGamepad />,
    iconClosed: <RiIcon.RiArrowDownFill />,
    iconOpened: <RiIcon.RiArrowUpSFill />,
    subNav: [
      {
        title: "Accion",
        path: "/genero/action",
        icon: <IoIcon.IoLogoGameControllerA />,
      },
      {
        title: "Aventura",
        path: "/genero/adventure",
        icon: <IoIcon.IoLogoGameControllerA />,
      },
      {
        title: "Rol",
        path: "/genero/role-playing",
        icon: <IoIcon.IoLogoGameControllerA />,
      },
      {
        title: "Simulador",
        path: "/genero/simulator",
        icon: <IoIcon.IoLogoGameControllerA />,
      },
    ],
  },
  {
    title: "Sagas Populares",
    path: "#",
    icon: <IoIcon.IoLogoGameControllerA />,
    iconClosed: <RiIcon.RiArrowDownFill />,
    iconOpened: <RiIcon.RiArrowUpSFill />,
    subNav: [
      {
        title: "Grand Theft Auto",
        path: "/search/grand-theft-auto",
        icon: <IoIcon.IoLogoGameControllerA />,
      },
      {
        title: "Resident Evil",
        path: "/search/resident-evil",
        icon: <IoIcon.IoLogoGameControllerA />,
      },
      {
        title: "Silent Hill",
        path: "/search/silent-hill",
        icon: <IoIcon.IoLogoGameControllerA />,
      },
      {
        title: "Metal Gear Solid",
        path: "/search/metal-gear-solid",
        icon: <IoIcon.IoLogoGameControllerA />,
      },
      {
        title: "Devil May Cry",
        path: "/search/devil-may-cry",
        icon: <IoIcon.IoLogoGameControllerA />,
      },
      {
        title: "Gears of War",
        path: "/search/gears-of-war",
        icon: <IoIcon.IoLogoGameControllerA />,
      },
      {
        title: "God of War",
        path: "/search/god-of-war",
        icon: <IoIcon.IoLogoGameControllerA />,
      },
    ],
  },
  {
    title: "Busca un juego",
    path: "/search/:game",
    icon: <IoIcon.IoLogoGameControllerA />,
    subNav: [],
  },
];
