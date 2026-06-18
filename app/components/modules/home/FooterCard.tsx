import { motion } from "framer-motion"
import { CheckIcon } from "~/components/icons/Check"
import { CrossIcon } from "~/components/icons/Cross"
import { Button } from "~/components/ui/button"

interface Feature {
  label: string
  included: boolean
}

interface Plan {
  id: string
  name: string
  price: number
  type: string
  features: Feature[]
  buttonText: string
}

interface FooterCardProps {
  className?: string
  plan: Plan
}

const FooterCard = ({ plan }: FooterCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{
        y: -4,
        scale: 1.02,
        transition: {
          duration: 0.25,
          ease: "easeOut",
        },
      }}
      className="rounded-[28px] bg-white p-8 shadow-[-15px_50px_150px_0px_#3159D31F]"
    >
      <div className="flex items-center gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex h-45 w-40 min-w-40 flex-col items-center justify-center rounded-[16px] bg-[#ECF2FF]"
        >
          {plan.name !== "Free" && (
            <div className="absolute -top-5.5 flex w-[calc(100%-10px)] items-center gap-3 rounded-full bg-[#C2EEFF] p-1 text-[#11142D] shadow-[0px_4px_4px_0px_#4391C135]">
              <img
                src="/icons/premium.webp"
                width={36}
                height={36}
                alt="findWork"
                className="size-9 min-w-9 rounded-full object-cover"
              />
              <span className="text-base leading-3.75 font-semibold">
                Premium
              </span>
            </div>
          )}

          <p
            className={`text-[32px] leading-11.25 font-semibold ${
              plan.name === "Free"
                ? "text-[#52B4DA]"
                : "bg-[linear-gradient(129.98deg,#52B4DA_-106.35%,#1E3E85_95.25%)] bg-clip-text text-transparent"
            }`}
          >
            {plan.name === "Free" ? plan.type : `$${plan.price}`}
          </p>
          <p className="text-xl leading-8.75 font-medium text-[#11142D65]">
            {plan.type}
          </p>
        </motion.div>

        <motion.ul
          className="space-y-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.3 },
            },
          }}
        >
          {plan.features.map((feature, idx) => (
            <motion.li
              key={idx}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="flex items-start gap-3 text-base leading-6 font-medium"
            >
              {feature.included ? (
                <CheckIcon className="mt-0.5 size-5 min-w-5" />
              ) : (
                <CrossIcon className="mt-0.5 size-5 min-w-5" />
              )}
              <span
                className={
                  feature.included ? "text-[#323445]" : "text-[#808191]"
                }
              >
                {feature.label}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Button className="group mt-6.5 h-18 w-full rounded-[24px] bg-[linear-gradient(129.98deg,#52B4DA_-106.35%,#1E3E85_95.25%)] px-0 text-xl font-semibold text-white shadow-[10px_0px_50px_0px_#3159D347] hover:bg-[linear-gradient(309.98deg,#52B4DA_-106.35%,#1E3E85_95.25%)]">
          {plan.name !== "Free" ? (
            plan.buttonText
          ) : (
            <div className="flex size-[calc(100%-2px)] items-center justify-center rounded-[22px] bg-white text-[#1E3E85] group-hover:bg-accent">
              {plan.buttonText}
            </div>
          )}
        </Button>
      </motion.div>
    </motion.div>
  )
}

export default FooterCard
