interface IconProps {
  className?: string
}

const LinkedinIcon = ({ className }: IconProps) => {
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
        fill="url(#paint0_linear_3271_21)"
        fillOpacity="0.15"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.6632 13.534V14.6654C16.6508 12.6993 20.5338 12.6659 20.6651 15.5154L20.6685 15.6654V20.6654L18.6638 20.6667V16.666C18.6638 13.8894 15.7728 14.6444 15.6662 16.5627L15.6632 16.6647V20.6667H13.6678V13.534H15.6632V14.6654V13.534ZM12.6622 13.6641V20.6654H10.6669V13.6641H12.6622ZM11.667 11.334C12.2183 11.334 12.665 11.7807 12.665 12.332C12.665 12.8827 12.2183 13.3293 11.667 13.3293C11.1163 13.3293 10.6697 12.8827 10.6697 12.332C10.6697 11.7807 11.1163 11.334 11.667 11.334Z"
        fill="#DFE1F2"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3271_21"
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

export { LinkedinIcon }
