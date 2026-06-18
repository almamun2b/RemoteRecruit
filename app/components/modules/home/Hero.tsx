const data = {
  title: "RemoteRecruit’s Difference",
  description:
    "RemoteRecruit is connecting the world with an easy-to-use platform that lets full-time, part-time, and freelance workers showcase their talents to businesses that need them. With no paywalls, no fees, and no barriers, there’s nothing but you, your talents, and the next step in your career.",
}

const Hero = () => {
  return (
    <div className="flex min-h-176 w-full items-center justify-center bg-[url('/images/hero.webp')] bg-cover bg-center">
      <div className="flex size-full max-w-200 flex-col gap-4 text-center">
        <h1 className="text-[53px] leading-17 font-bold text-white">
          {data.title}
        </h1>
        <p className="text-xl leading-8 font-medium text-white/80">
          {data.description}
        </p>
      </div>
    </div>
  )
}

export default Hero
