import React,  { ReactNode, MouseEvent } from "react";

interface SlotComponentProps {
    style: string,
    children: ReactNode;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  }

const BaseButton: React.FC<SlotComponentProps> = ({style, children, onClick }) => {
    return (
    <button
        onClick={onClick}
        className={`text-sm text-center rounded-full hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300 ${style}`}
      >
        { children }
      </button>
    )
}

export default BaseButton