import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeHeader } from "../../store/slice/headerSlice";
import avt from "../../../public/images/dashboard.svg";
import Tiles from "./component/Tiles";
import Overview from "./component/Overview";
import { RootState } from "../../store/store";
import useApiCall from "../../hooks/useApiCall";
import { getDashboard } from "../../service/apiUrls";

const Dashboard: React.FC = () => {
  const User = useSelector((state: RootState) => state?.user?.userDetails);
  const { data } = useApiCall({
    key: getDashboard,
    url: getDashboard,
    method: "get",
  });
  // console.log(data?.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeHeader("Dashboard"));
  }, []);
  return (
    <section className="p-4">
      <div className="rounded-[16px] flex justify-between items-center bg-white p-3">
        <div>
          <h5 className="text-[24px] font-medium">
            Welcome back <b>{User?.name}!</b>
          </h5>
          <small className="text-[#8790A1] text-[15px]">
            You have earned 54% profit more than last month which is great
            thing.{" "}
          </small>
        </div>
        <img src={avt} alt="icon" />
      </div>
      <Tiles data={data?.data} />
      <Overview data={data?.data} />
    </section>
  );
};

export default Dashboard;
