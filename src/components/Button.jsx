/** @format */

const Button = ({ name, handleOnClick, style }) => {
  return (
    <button
      type="button"
      className="px-4 py-3 text-[#1A162E] font-semibold rounded-md bg-[#FFB700]"
      onClick={() => {
        handleOnClick && handleOnClick();
      }}
    >
      <span className="text-center">{name}</span>
    </button>
  );
};

export default Button;
