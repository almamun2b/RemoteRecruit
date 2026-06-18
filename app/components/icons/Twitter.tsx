interface IconProps {
  className?: string
}

const TwitterIcon = ({ className }: IconProps) => {
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
        fill="url(#paint0_linear_3271_15)"
        fillOpacity="0.15"
      />
      <path
        d="M22.1978 11.2682L23.1991 10.8272C23.4194 10.7301 23.6668 10.8915 23.6668 11.1322C23.6668 11.5126 23.5133 12.2556 23.0657 13.3935C22.9651 15.3022 22.0647 18.1353 20.4558 20.089C17.9898 23.0837 14.2061 23.8843 8.99158 21.7051C8.65673 21.5652 8.75496 21.0667 9.11786 21.0642C10.4355 21.0553 11.7079 20.7457 12.8613 20.1715C11.7268 19.8877 10.8289 19.0471 10.4072 17.8765C10.4009 17.859 10.3961 17.8414 10.3928 17.8238L10.2632 17.7481C9.11079 17.0421 8.34873 15.6693 8.40431 14.1401L8.6394 14.0135C8.06544 12.8534 8.28948 11.3909 9.13507 10.6693C9.25338 10.5684 9.42579 10.5626 9.55054 10.6555C11.4521 12.0716 12.7234 12.7029 15.0182 13.3073C15.3218 9.78289 19.3899 8.31817 22.1978 11.2682Z"
        fill="#DFE1F2"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3271_15"
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

export { TwitterIcon }
