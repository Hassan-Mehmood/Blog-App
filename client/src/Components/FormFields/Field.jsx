import React from "react";

const Field = (props) => {
  const handleFormChange = (e) => {
    props.handleFormChange(e);
  };

  return (
    <>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={props.id}
      >
        {props.label}
      </label>
      {/* INPUT */}
      <input
        className="signup-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={props.id}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        required={true}
        onChange={handleFormChange}
        value={props.value}
      />
      <span className="text-xs text-red error-span">{props.errorMessage}</span>
    </>
  );
};

export default Field;
