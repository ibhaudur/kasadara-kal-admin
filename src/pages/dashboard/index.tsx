import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeHeader } from "../../store/slice/headerSlice";

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeHeader("Welcome Ibhaudur"));
  }, []);
  return <div>Dashboard</div>;
};

export default Dashboard;
