import Line from "../../../../public/images/line.svg";
import bag from "../../../../public/images/bag.svg";
import user from "../../../../public/images/user.svg";
import React from "react";
import { AmountKeys, TilesProps } from "../../../types/pages.types";

const Tiles: React.FC<TilesProps> = ({ data }) => {
  const amount: Record<AmountKeys, number | string> = {
    total_payments: data?.total_payments || 0,
    group_4_amount: data?.category_wise_amount?.group_4_amount || 0,
    group_2a_mains_amount:
      data?.category_wise_amount?.group_2a_mains_amount || 0,
    group_1_prelims_amount:
      data?.category_wise_amount?.group_1_prelims_amount || 0,
  };

  const items: { name: string; value: AmountKeys }[] = [
    { name: "Total Payments", value: "total_payments" },
    { name: "Group 4", value: "group_4_amount" },
    { name: "Group 2A Mains", value: "group_2a_mains_amount" },
    { name: "Group 1 Prelims", value: "group_1_prelims_amount" },
  ];

  return (
    <div className="grid grid-cols-11 mt-3 gap-3">
      <div className="col-span-7 grid grid-cols-8 gap-3">
        {items.map((item, index) => (
          <div key={index} className="col-span-2 bg-white p-4 rounded-2xl">
            <p className="text-[12px] text-[#8790A1]">{item.name}</p>
            <h5 className="text-[20px] font-medium text-[#2A3547] mb-5">
              ₹{amount[item.value]}
            </h5>
            <img src={Line} alt="line" />
          </div>
        ))}
      </div>

      <div className="col-span-4 grid grid-cols-2 gap-3">
        <div className="col-span-1 bg-white p-4 rounded-2xl">
          <img src={user} alt="user" />
          <p className="text-[12px] text-[#8790A1] mt-3">
            Registered Candidates
          </p>
          <h5 className="text-[20px] font-medium text-[#2A3547]">
            {data?.total_registered_candidates}
          </h5>
        </div>

        <div className="col-span-1 bg-white p-4 rounded-2xl">
          <img src={bag} alt="bag" />
          <p className="text-[12px] text-[#8790A1] mt-3">
            Average attendance for exam
          </p>
          <h5 className="text-[20px] font-medium text-[#2A3547]">
            {data?.average_attendance}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Tiles;
