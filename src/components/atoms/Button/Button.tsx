import { FC } from "react";
import { ButtonProps } from "../../../common/types";

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  filled = false,
  wider = false,
  form,
}) => {
  let buttonClasses =
    "w-fit px-6 py-2 outline outline-2 outline-main-blue uppercase text-sm bg-light-blue hover:bg-main-blue font-medium hover:transition hover:ease-in-out hover:duration-300 hover:text-white";

  if (filled) {
    buttonClasses += ` bg-main-blue text-white hover:bg-dark-blue`;
  }

  if (wider) {
    buttonClasses += ` px-12`;
  }

  return (
    <button onClick={onClick} type={type} className={buttonClasses} form={form}>
      {children}
    </button>
  );
};

export default Button;
