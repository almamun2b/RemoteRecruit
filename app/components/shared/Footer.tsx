import { motion } from "framer-motion"
import { Link } from "react-router"
import { FacebookIcon } from "../icons/Facebook"
import { Icon } from "../icons/Icon"
import { InstagramIcon } from "../icons/Instagram"
import { LinkedinIcon } from "../icons/Linkedin"
import { SiteLogo } from "../icons/Logo"
import { RedditIcon } from "../icons/Reddit"
import { TwitterIcon } from "../icons/Twitter"
import { XIcon } from "../icons/X"
import FooterCard from "../modules/home/FooterCard"

const plans = [
  {
    id: "basic",
    name: "Free",
    price: 0,
    type: "Basic",
    features: [
      { label: "1 Active Job", included: true },
      { label: "Basic List Placement", included: true },
      { label: "Unlimited Job Applicants", included: false },
      { label: "Invite Anyone to Apply to Your Jobs", included: false },
    ],
    buttonText: "Get Started",
  },
  {
    id: "premium",
    name: "Premium",
    price: 79.99,
    type: "Per Month",
    features: [
      { label: "Unlimited Job Posts", included: true },
      { label: "Instant Job Post Approval", included: true },
      { label: "Premium List Placement", included: true },
      { label: "Unlimited Job Applicants", included: true },
    ],
    buttonText: "Get Started",
  },
]

const Footer = () => {
  return (
    <footer className="relative mt-109.5 flex min-h-142.5 w-full flex-col bg-[url('/images/footer.webp')] bg-cover bg-center">
      <section className="absolute top-0 left-1/2 w-full max-w-260 -translate-x-1/2 -translate-y-1/2">
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center text-[40px] leading-13 font-semibold text-[#11142D]"
        >
          Help Is One Click Away
        </motion.h3>

        <motion.div
          className="grid w-full grid-cols-1 gap-10 pt-12.5 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.35,
                delayChildren: 0.3,
              },
            },
          }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={{
                hidden: { opacity: 0, y: 80, scale: 0.92 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                },
              }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
              }}
            >
              <FooterCard plan={plan} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <div className="flex-1" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mx-auto flex w-full max-w-260 items-center justify-between py-25"
      >
        <SiteLogo className="h-18.5 w-auto" />

        <div className="flex items-center gap-2.5">
          {[
            FacebookIcon,
            InstagramIcon,
            XIcon,
            TwitterIcon,
            LinkedinIcon,
            RedditIcon,
          ].map((IconComp, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.08 }}
            >
              <Link to="/">
                <IconComp className="hover:scale-110" />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="border-t border-[#8BA3CC]/50 py-6">
        <Icon className="mx-auto" />
      </div>
    </footer>
  )
}

export default Footer
