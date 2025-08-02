import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RoutesList } from "../utils/utils";
import { FaBars } from "react-icons/fa";
import Logo from "../../../public/images/logo-icon.svg";
const Sidebar: React.FC<{ permission: string[] }> = ({ permission }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="md:hidden p-4 cursor-pointer text-white bg-[gray-800]"
        onClick={toggleSidebar}
      >
        <FaBars />
      </button>
      <aside
        className={`${
          isOpen ? "block" : "hidden"
        } md:block w-[84px] h-screen bg-[#0F1925] text-white flex flex-col`}
      >
        <img src={Logo} className="mx-auto mt-3" alt="icon" />
        <nav className="flex-1">
          <ul className="mt-4">
            {RoutesList.map((route, index) => {
              if (false && !permission?.includes(route.permission)) {
                return null;
              }
              return (
                <li className="mb-2" key={index}>
                  <NavLink
                    to={route.path}
                    className="py-2 p-1 rounded flex flex-col items-center gap-2 hover:bg-gray-700"
                  >
                    <img src={route.Icon} className="" />
                    <small className="text-center block"> {route.title}</small>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
