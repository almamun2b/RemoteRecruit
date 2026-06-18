import { motion } from "framer-motion"

const data = {
  title: "RemoteRecruit’s Difference",
  description:
    "RemoteRecruit is connecting the world with an easy-to-use platform that lets full-time, part-time, and freelance workers showcase their talents to businesses that need them. With no paywalls, no fees, and no barriers, there’s nothing but you, your talents, and the next step in your career.",
}

const Hero = () => {
  return (
    <div className="relative flex min-h-176 w-full items-center justify-center overflow-hidden bg-[url('/images/hero.webp')] bg-cover bg-center">
      <div className="flex size-full max-w-200 flex-col gap-4 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[53px] leading-17 font-bold text-white"
        >
          {data.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-xl leading-8 font-medium text-white/80"
        >
          {data.description}
        </motion.p>
      </div>
    </div>
  )
}

export default Hero
