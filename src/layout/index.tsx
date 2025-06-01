import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Header from "./header";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";


const Layout: React.FC = () => {
  const User = useSelector((state: RootState) => state?.header?.pageName);
  return (
    <div className="flex bg-gray-100">
      <Sidebar permission={[]} />
      <main className="w-full h-[100vh] overflow-y-scroll">
        <div className="bg-gray-100 sticky top-0">
          <Header name={User} />
        </div>
        <section className="p-3">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default Layout;
