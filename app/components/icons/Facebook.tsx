interface IconProps {
  className?: string
}

const FacebookIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        width="32"
        height="32"
        rx="16"
        fill="url(#paint0_linear_3271_9)"
        fillOpacity="0.15"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.9648 23.3346V17.624H11.3335V14.3606H12.9648V12.7466C12.9648 10.494 14.7908 8.66797 17.0442 8.66797H19.4915V11.9313H17.8602C16.9582 11.9313 16.2282 12.6613 16.2282 13.5626V14.3606H19.4915L18.6755 17.624H16.2282V23.3346H12.9648Z"
        fill="#DFE1F2"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3271_9"
          x1="-16"
          y1="16"
          x2="16"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EBEDFF" />
          <stop offset="1" stopColor="#ADB8FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export { FacebookIcon }
