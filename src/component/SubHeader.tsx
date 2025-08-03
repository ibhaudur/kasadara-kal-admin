const SubHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="rounded-[16px] bg-white p-3">
      <h5 className="text-[20px] font-semibold">{title}</h5>
      <small className="text-[#8790A1]">{description}</small>
    </div>
  );
};

export default SubHeader;
