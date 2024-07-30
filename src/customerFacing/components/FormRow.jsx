import React from "react";

const FormRow = ({ type, name, handleChange, labelText, value, }) => {
  return (
    <div className="mb-4">
      <label
        className="block text-sm font-medium text-muted-foreground"
        htmlFor={name}
      >
        {labelText || name} <span className="text-red-500">*</span>{" "}
      </label>
      <input
        type={type}
        className="border border-border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary"
        name={name}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default FormRow;
