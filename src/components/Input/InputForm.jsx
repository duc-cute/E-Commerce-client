/** @format */

import { memo, useEffect } from "react";

const InputForm = ({
  label,
  disabled,
  register,
  errors,
  id,
  defaultValue,
  validate,
  type = "text",
  placeholder,
  fullwidth,
  style,
}) => {
  return (
    <div className={`${style} flex-1`}>
      <div
        className={` bg-white  flex justify-between items-center  ${
          fullwidth ? `w-full` : ""
        }`}
      >
        {label && (
          <label htmlFor={id} className="min-w-[80px]">
            {label}
          </label>
        )}
        <div className="flex flex-col gap-2  w-full">
          <input
            type={type}
            id={id}
            disabled={disabled}
            {...register(id, validate)}
            className="bg-gray-50 border border-gray-300 border-solid text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block p-2"
            placeholder={placeholder}
            defaultValue={defaultValue}
          />
          {errors[id] && (
            <small className="text-[12px] text-main italic  ">
              {errors[id]?.message}
            </small>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(InputForm);
