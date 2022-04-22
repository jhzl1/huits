type BurgerProps = {
  color: "purple" | "white";
};

const Burger = ({ color }: BurgerProps) => {
  return (
    <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.3103 2H2"
        stroke={color === "purple" ? "#652682" : "#ffff"}
        strokeWidth="3.51724"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.3448 12.5517H2"
        stroke={color === "purple" ? "#652682" : "#ffff"}
        strokeWidth="3.51724"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.5 23.9828H2"
        stroke={color === "purple" ? "#652682" : "#ffff"}
        strokeWidth="3.51724"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Burger;
