import { motion } from "framer-motion"
import { PlayIcon } from "~/components/icons/Play"
import GruCard from "./GruCard"
import SectionCard from "./SectionCard"

const data = {
  section: "Custom Profile",
  title: "Showcase Your Talents",
  description:
    "Personalize your profile with everything that makes you unique. Add an introductory video and other media for a personal touch that stands out to employers and candidates.",
  profile: {
    image: "/images/customProfile.webp",
    feedback: [
      {
        id: 1,
        image: "/images/gru.webp",
        title: "Past Client Feedback",
        name: "Best Developer Ever!",
        yellowBorder: true,
      },
    ],
    technology: [
      "Python Dev",
      "Javascript",
      "Front End",
      "Back End",
      "IOS Development",
    ],
  },
}

const CustomProfile = () => {
  return (
    <div className="mx-auto mt-16 grid w-full max-w-260 grid-cols-1 items-center gap-14 px-5 sm:mt-30 lg:mt-43 lg:grid-cols-2 xl:px-0 2xl:mt-50">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="order-1 mx-auto flex w-full flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left"
      >
        <SectionCard card={data} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        className="order-2 mx-auto flex w-full justify-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative flex w-full flex-col gap-9 rounded-[34px] border border-[#F6F4FF] bg-white p-5 pb-9.25 shadow-[14px_41px_100px_0px_#3159D31F] sm:max-w-88.75"
        >
          <div className="absolute top-0 -left-3 size-5.5 rounded-full bg-[linear-gradient(132.56deg,#52B4DA_5.63%,#1E3E85_106.18%)] sm:-left-10" />

          <div className="relative w-full">
            <div className="absolute -right-4 -bottom-4 z-10 flex size-16 items-center justify-center rounded-full bg-[linear-gradient(132.56deg,#52B4DA_5.63%,#1E3E85_106.18%)] shadow-[14px_41px_50px_0px_#3159D312] sm:-right-11.5 sm:-bottom-11.5 sm:size-22.75">
              <img
                src="/images/gru.webp"
                width={75}
                height={75}
                alt="Client profile thumbnail avatar"
                className="size-12 rounded-full object-cover sm:size-18.75"
              />
            </div>

            <PlayIcon className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 scale-75 sm:scale-100" />

            <motion.img
              src={data.profile.image}
              width={315}
              height={176}
              alt="Interactive user profile workspace featuring dynamic portfolio cards and media attachment streams"
              className="h-auto w-full rounded-[16px] object-cover"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          {data.profile.feedback.map((freelancer) => (
            <motion.div
              key={freelancer.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <GruCard
                gru={freelancer}
                className="-ml-4 min-[400px]:-ml-12 sm:-ml-20"
              />
            </motion.div>
          ))}

          <motion.ul
            className="flex flex-wrap items-center gap-2.5 sm:gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.08, delayChildren: 0.5 },
              },
            }}
          >
            {data.profile.technology.map((tec, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 20 },
                  visible: { opacity: 1, scale: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
                className="flex h-8 items-center justify-center rounded-[8px] bg-[linear-gradient(132.56deg,#5799EB1A_5.63%,#9F74FB1A_106.18%)] px-3 text-sm"
              >
                <p className="bg-[linear-gradient(129.98deg,#52B4DA_-106.35%,#1E3E85_95.25%)] bg-clip-text text-[12px] leading-5.25 font-medium text-transparent">
                  {tec}
                </p>
              </motion.li>
            ))}

            <motion.li
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0 },
              }}
              className="flex h-8 items-center justify-center rounded-full bg-[linear-gradient(132.56deg,#5799EB1A_5.63%,#9F74FB1A_106.18%)] px-3 text-sm"
            >
              <p className="bg-[linear-gradient(129.98deg,#52B4DA_-106.35%,#1E3E85_95.25%)] bg-clip-text text-[12px] leading-5.25 font-medium text-transparent">
                +12
              </p>
            </motion.li>
          </motion.ul>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default CustomProfile
