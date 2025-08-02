import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Header from "./header";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Layout: React.FC = () => {
  const User = useSelector((state: RootState) => state);
  return (
    <div className="flex bg-gray-100">
      <Sidebar permission={[]} />
      <main className="w-full h-[100vh] overflow-y-scroll">
        <div className="bg-gray-100 sticky top-0 z-10">
          <Header
            pageName={User?.header?.pageName}
            userName={User?.user?.userDetails?.name || "Guest"}
            userEmail={User?.user?.userDetails?.email || ""}
          />
        </div>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
