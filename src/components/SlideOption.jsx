/** @format */

const SlideOption = ({ icon }) => {
  return (
    <span className=" text-[#2a2a2a] hover:text-white hover:bg-[#2a2a2a] hover:border-[#2a2a2a] h-10 rounded-full w-10 flex items-center justify-center  border-solid border-[#c5cfd6] border-[1px] transition duration-300 ease-in-out">
      {icon}
    </span>
  );
};

export default SlideOption;
