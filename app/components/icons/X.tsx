interface IconProps {
  className?: string
}

const XIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="16"
        cy="16"
        r="16"
        fill="url(#paint0_linear_3271_30)"
        fillOpacity="0.15"
      />
      <g clipPath="url(#clip0_3271_30)">
        <path
          d="M17.2224 15.0181L22.0004 9.5835H20.8683L16.7177 14.3013L13.405 9.5835H9.58337L14.5939 16.7183L9.58337 22.4168H10.7155L15.0959 17.4335L18.595 22.4168H22.4167L17.2224 15.0181ZM15.6713 16.7809L15.1629 16.07L11.1237 10.4186H12.8628L16.1235 14.9812L16.6298 15.6921L20.8678 21.6224H19.1287L15.6713 16.7809Z"
          fill="#DCDEF1"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_3271_30"
          x1="-16"
          y1="16"
          x2="16"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EBEDFF" />
          <stop offset="1" stopColor="#ADB8FF" />
        </linearGradient>
        <clipPath id="clip0_3271_30">
          <rect
            width="14"
            height="14"
            fill="white"
            transform="translate(9 9)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export { XIcon }
