interface LogoProps {
  className?: string
}

const PlayIcon = ({ className }: LogoProps) => {
  return (
    <svg
      width="57"
      height="57"
      viewBox="0 0 57 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`group cursor-pointer ${className}`}
    >
      <foreignObject x="-5.43656" y="-5.43656" width="67.8731" height="67.8731">
        <div
          style={{
            backdropFilter: "blur(2.72px)",
            clipPath: "url(#bgblur_0_1_192_clip_path)",
            height: "100%",
            width: "100%",
          }}
        ></div>
      </foreignObject>
      <circle
        data-figma-bg-blur-radius="5.43656"
        cx="28.5"
        cy="28.5"
        r="28.5"
        fill="#52B4DA"
        className="opacity-50 group-hover:opacity-65"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M39 26.0359C41.6667 27.5755 41.6667 31.4245 39 32.9641L26.25 40.3253C23.5833 41.8649 20.25 39.9404 20.25 36.8612L20.25 22.1388C20.25 19.0596 23.5833 17.1351 26.25 18.6747L39 26.0359Z"
        fill="#1E3E85"
        className="origin-center group-hover:scale-105"
      />
      <defs>
        <clipPath
          id="bgblur_0_1_192_clip_path"
          transform="translate(5.43656 5.43656)"
        >
          <circle cx="28.5" cy="28.5" r="28.5" />
        </clipPath>
      </defs>
    </svg>
  )
}

export { PlayIcon }
