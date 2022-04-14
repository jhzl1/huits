import { FC } from "react";

type Props = {
  className?: string;
};

const CustomBtn: FC<Props> = ({ children, className }) => {
  return (
    <button
      className={`bg-gradient-to-br from-[#E164C5] via-[#8000FF] to-[#8000FF] text-white rounded-full ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomBtn;
