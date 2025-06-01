import React from "react";

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <header className="bg-white shadow-md w-full p-4">
      <h5 className="text-[16px] font-semibold">{name || ""}</h5>
    </header>
  );
};

export default Header;
