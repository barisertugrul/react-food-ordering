import React from "react";

const Input = (props) => {
  const {
    type,
    errorMessage,
    touched,
    value,
    placeholder,
    isrequired,
    addedClass,
    ...inputProps
  } = props;
   
  return (
    <div className="w-full">
      <label className="relative block cursor-text w-full">
        <input
          type={type}
          value={value}
          className={`h-14 w-full border outline-none rounded-xl px-4 peer 
                ${type !== "datetime-local" && "pt-2"}
                ${touched && errorMessage ? "border-danger" : "border-primary"}
                ${value ? "has-value" : ""}
                ${addedClass || ''}`}
          required = { isrequired }
          {...inputProps}
        />
        {type !== "datetime-local" && (
          <span className="absolute text-gray-400 top-0 left-0 px-4 text-sm flex items-center h-full peer-focus:h-7 peer-focus:text-xs  peer-[&.has-value]:text-xs peer-[&.has-value]:h-7 transition-all ">
            {placeholder}
          </span>
        )}
      </label>
      {touched && errorMessage && (
        <span className="text-danger text-xs">{errorMessage}</span>
      )}
    </div>
  );
};

export default Input;
