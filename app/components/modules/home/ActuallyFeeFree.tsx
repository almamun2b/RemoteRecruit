import { motion } from "framer-motion"
import { CheckIcon } from "~/components/icons/Check"
import { Icon } from "~/components/icons/Icon"
import GruCard from "./GruCard"
import SectionCard from "./SectionCard"

const data = {
  section: "Actually Fee Free",
  title: "Fee-Free Forever",
  description:
    "We don’t charge you fees and we don’t put up paywalls. We’re the bridge that connects job opportunities with the best candidates, with no middleman involved.",
  payment: {
    id: 1,
    image: "/images/paypal.webp",
    title: "Upcoming Payment In…",
    name: "14 Days - $79.99",
    yellowBorder: false,
    imageClass: "size-8 sm:size-8 rounded-none",
  },
  plan: {
    subTitle: "Your Membership Tier",
    title: "Premium",
    sectionTitle: "Features",
    features: [
      "Up to 25 active job posts",
      "Premium Placement & Visibility",
      "Messaging anyone, unlimited",
      "Unlimited invites",
      "View all applicants",
      "Unlimited invites to jobseekers",
    ],
  },
}

const ActuallyFeeFree = () => {
  return (
    <div className="mx-auto mt-16 grid w-full max-w-260 grid-cols-1 items-center gap-14 px-5 sm:mt-30 lg:mt-43 lg:grid-cols-2 xl:px-0 2xl:mt-50">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="order-2 mx-auto flex w-full justify-center lg:order-1"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative flex w-full flex-col rounded-[34px] border border-[#F6F4FF] bg-white p-6 pb-7 shadow-[14px_41px_100px_0px_#3159D31F] sm:max-w-88.75 sm:min-w-88.75 sm:p-8"
        >
          <div className="absolute top-0 -left-3 size-5.5 rounded-full bg-[linear-gradient(132.56deg,#52B4DA_5.63%,#1E3E85_106.18%)] sm:-left-10" />

          <span className="text-sm leading-4.5 font-semibold tracking-[1px] text-[#808191]">
            {data.plan.subTitle}
          </span>
          <p className="mt-2 bg-[linear-gradient(129.98deg,#52B4DA_-106.35%,#1E3E85_95.25%)] bg-clip-text text-xl leading-6 font-semibold tracking-[1.11px] text-transparent">
            {data.plan.title}
          </p>

          <div className="relative mt-5 w-full">
            <div className="absolute top-0 -right-4 flex size-16 items-center justify-center rounded-full bg-[linear-gradient(132.56deg,#52B4DA_5.63%,#1E3E85_106.18%)] shadow-[14px_41px_50px_0px_#3159D312] sm:-right-16 sm:size-22.75">
              <Icon className="h-auto w-8 sm:w-12" />
            </div>

            <p className="text-[10px] leading-4.5 font-bold tracking-[1px] text-[#11142D82] uppercase">
              {data.plan.sectionTitle}
            </p>

            <motion.ul
              className="mt-3 space-y-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.1, delayChildren: 0.3 },
                },
              }}
            >
              {data.plan.features.map((feature, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-3 text-sm leading-6 text-[#323445E6]"
                >
                  <CheckIcon className="size-4 min-w-4" />
                  <p>{feature}</p>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <GruCard
              gru={data.payment}
              className="mt-9.5 -ml-4 min-[400px]:-ml-12 sm:-ml-20 lg:-ml-24"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="order-1 mx-auto flex w-full flex-col items-center text-center lg:order-2 lg:mx-0 lg:items-start lg:text-left"
      >
        <SectionCard card={data} />
      </motion.div>
    </div>
  )
}

export default ActuallyFeeFree
