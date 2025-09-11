import React from "react";
type ButtonProps = {
  handleButtonClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
};

export const Button = ({ handleButtonClick }: ButtonProps) => {
  return (
    <button
      onClick={(event) => handleButtonClick(event, 2)}
      style={{ color: "red" }}
    >
      Click me{" "}
    </button>
  );
};
