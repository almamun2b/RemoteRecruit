import { motion } from "framer-motion"
import { Icon } from "~/components/icons/Icon"
import GruCard from "./GruCard"
import SectionCard from "./SectionCard"

const data = {
  section: "Global Reach",
  title: "The First Fully Global Job Board, Anywhere, Ever",
  description:
    "RemoteRecruit connects candidates with opportunities around the world. With today’s remote-first workforce, you need to be able to find the best jobs and the best people for them, wherever they may be.",
  market: {
    image: "/images/globalReach.webp",
    freelancers: [
      {
        id: 1,
        image: "/images/gru.webp",
        title: "Python Developer",
        name: "Felonious Gru",
        yellowBorder: true,
      },
      {
        id: 2,
        image: "/images/gru.webp",
        title: "Front End Wizard",
        name: "Mel Muselphiem",
        yellowBorder: true,
        titleClass: "text-[#52B4DA]",
      },
    ],
  },
}

const GlobalReach = () => {
  return (
    <div className="mx-auto mt-16 grid w-full max-w-260 grid-cols-1 items-center gap-14 px-5 sm:mt-25 lg:grid-cols-2 xl:px-0 2xl:mt-40">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto flex w-full flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left"
      >
        <SectionCard card={data} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        className="mx-auto flex w-full justify-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="relative flex w-full flex-col gap-9 rounded-[34px] border border-[#F6F4FF] bg-white p-5 pb-9.25 shadow-[14px_41px_100px_0px_#3159D31F] sm:max-w-88.75"
        >
          <div className="absolute top-0 -left-3 size-5.5 rounded-full bg-[linear-gradient(132.56deg,#52B4DA_5.63%,#1E3E85_106.18%)] sm:-left-10" />

          <div className="relative w-full">
            <div className="absolute -right-4 -bottom-4 z-10 flex size-16 items-center justify-center rounded-full bg-[linear-gradient(132.56deg,#52B4DA_5.63%,#1E3E85_106.18%)] shadow-[14px_41px_50px_0px_#3159D312] sm:-right-11.5 sm:-bottom-11.5 sm:size-22.75">
              <Icon className="h-auto w-8 sm:w-12" />
            </div>

            <motion.img
              src={data.market.image}
              width={315}
              height={176}
              alt="World map illustration detailing interconnected global candidate networks"
              className="h-auto w-full rounded-[16px] object-cover"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </div>

          {data.market.freelancers.map((freelancer, index) => (
            <motion.div
              key={freelancer.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              <GruCard
                gru={freelancer}
                className={
                  index === 0
                    ? "-ml-4 min-[400px]:-ml-12 sm:-ml-20"
                    : "-mr-4 min-[400px]:-mr-12 sm:-mr-20"
                }
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default GlobalReach
