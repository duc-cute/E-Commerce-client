/** @format */

const InputField = ({
  value,
  setValue,
  nameKey,
  type,
  invalidFied,
  setInvalidField,
  icon,
  w,
  style,
}) => {
  return (
    <div
      className={`${style} bg-white border border-solid border-[#d2d1d6] flex justify-between items-center rounded-md ${
        w ? `w-[${w}px]` : ""
      }`}
    >
      <input
        type={type || "text"}
        className="outline-none text-[16px] px-4 py-2 w-full rounded-md placeholder:text-[14px] bg-transparent"
        placeholder={nameKey?.slice(0, 1).toUpperCase() + nameKey?.slice(1)}
        value={value}
        onChange={(e) =>
          setValue((prev) => ({ ...prev, [nameKey]: e.target.value }))
        }
      />

      <span className="text-[#d2d1d6] pr-2 text-[20px]">{icon}</span>
    </div>
  );
};

export default InputField;
