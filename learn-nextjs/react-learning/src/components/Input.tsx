import React from "react";

type InputProps = {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ placeholder, value, onChange, name, type }: InputProps) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      className="h-12 border-zinc-100 border-2"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default Input;
