import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeHeader } from "../../store/slice/headerSlice";
import avt from "../../../public/images/dashboard.svg";
import Tiles from "./component/Tiles";

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeHeader("Dashboard"));
  }, []);
  return (
    <section className="p-4">
      <div className="rounded-[16px] flex justify-between items-center bg-white p-3">
        <div>
          <h5 className="text-[24px] font-medium">
            Welcome back <b>Jeason Statham !</b>
          </h5>
          <small className="text-[#8790A1] text-[15px]">
            You have earned 54% profit more than last month which is great
            thing.{" "}
          </small>
        </div>
        <img src={avt} alt="icon" />
      </div>
      <Tiles />
    </section>
  );
};

export default Dashboard;
