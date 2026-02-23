interface RwaLogoProps {
  fill?: string;
  size?: string;
}
const RwaLogo = ({ fill = "#1462CC", size = "24" }: RwaLogoProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C12 9 4 12 0 12C9 12 12 20 12 24C12 15 20 12 24 12C15 12 12 4 12 0Z"
        fill={fill}
      />
    </svg>
  );
};

export default RwaLogo;
