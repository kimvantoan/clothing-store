import React from "react";

const ButtonSubmit = ({ title}) => {
  return (
    <button type="submit"
      className="active:bg-#9DA4AE bg-#6366F1 text-white rounded-lg py-3 px-5 font-medium text-lg w-fit"
    >
      {title}
    </button>
  );
};

export default ButtonSubmit;
