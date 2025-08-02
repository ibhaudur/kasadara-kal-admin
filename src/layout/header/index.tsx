import React, { useState, useRef, useEffect } from "react";
import Button from "../../component/UI/Button";
import { createPortal } from "react-dom";

interface HeaderProps {
  pageName: string;
  userName: string;
  userEmail: string;
}

const Header: React.FC<HeaderProps> = ({ pageName, userName, userEmail }) => {
  const [showPopup, setShowPopup] = useState(false);
  const avatarRef = useRef<HTMLDivElement>(null);

  const togglePopup = () => {
    setShowPopup((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        avatarRef.current &&
        !avatarRef.current.contains(event.target as Node)
      ) {
        setShowPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white flex justify-between items-center shadow-md w-full p-4 relative">
      <h5 className="text-[16px] font-semibold">{pageName || ""}</h5>

      <div className="relative" ref={avatarRef}>
        <div
          onClick={togglePopup}
          className="flex justify-center items-center cursor-pointer bg-[#44546F] rounded-full w-8 h-8"
        >
          <p className="text-white mb-0 text-sm">{userName?.charAt(0)}</p>
        </div>

        {showPopup &&
          createPortal(
            <div className="fixed top-14 right-6 z-40 bg-[#2BBC7C] shadow-lg rounded-2xl w-60 flex items-center justify-center">
              <div className="bg-white mt-14 rounded-2xl p-3 pt-8 pb-4 flex flex-col items-center relative w-full">
                <div className="absolute top-[-25px] bg-white flex justify-center items-center cursor-pointer border border-[#2BBC7C] rounded-full w-14 h-14">
                  <p className="text-[#2C8C53] mb-0 text-3xl font-extrabold">
                    {userName?.charAt(0)}
                  </p>
                </div>
                <p className="text-sm text-gray-800 mt-4 text-center font-semibold">
                  {userName}
                </p>
                <small className="text-[#8790A1] text-xs">{userEmail}</small>
                <Button
                  btnName="Logout"
                  splClass="rounded-[60px] py-1 px-6 mt-3"
                  type="outline"
                />
              </div>
            </div>,
            document.getElementById("portal-root")!
          )}
      </div>
    </header>
  );
};

export default Header;
