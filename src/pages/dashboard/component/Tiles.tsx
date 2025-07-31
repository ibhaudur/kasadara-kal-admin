import Line from "../../../../public/images/line.svg";
import bag from "../../../../public/images/bag.svg";
import user from "../../../../public/images/user.svg";

const Tiles = () => {
  return (
    <div className="grid grid-cols-11 mt-3 gap-3">
      <div className="col-span-7 grid grid-cols-8 gap-3">
        {[
          "Total Payments",
          "Exam Payments",
          "Quick Test Payments",
          "Mock Test Payments",
        ].map((item, index) => (
          <div key={index} className="col-span-2 bg-white p-4 rounded-2xl">
            <p className="text-[12px] text-[#8790A1]">{item}</p>
            <h5 className="text-[20px] font-medium text-[#2A3547] mb-5">
              $678,298
            </h5>
            <img src={Line} alt="i" />
          </div>
        ))}
      </div>
      <div className="col-span-4 grid grid-cols-2 gap-3">
        <div className="col-span-1 bg-white p-4 rounded-2xl">
          <img src={user} alt="i" />
          <p className="text-[12px] text-[#8790A1] mt-3">
            Registered Candidates
          </p>
          <h5 className="text-[20px] font-medium text-[#2A3547]">467</h5>
        </div>

        <div className="col-span-1 bg-white p-4 rounded-2xl">
          <img src={bag} alt="i" />
          <p className="text-[12px] text-[#8790A1] mt-3">
            Average attendance for exam
          </p>
          <h5 className="text-[20px] font-medium text-[#2A3547]">260</h5>
        </div>
      </div>
    </div>
  );
};

export default Tiles;
