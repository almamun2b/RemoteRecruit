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
    <footer className="relative mt-50 flex min-h-auto w-full flex-col bg-[url('/images/footer.webp')] bg-cover bg-top bg-no-repeat md:mt-109.5 md:min-h-142.5">
      <section className="relative top-0 left-0 mx-auto w-full max-w-260 translate-x-0 -translate-y-16 px-4 sm:-translate-y-24 md:absolute md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 xl:px-0">
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center text-3xl leading-tight font-semibold text-[#11142D] sm:text-[40px] md:leading-13"
        >
          Help Is One Click Away
        </motion.h3>

        <motion.div
          className="grid w-full grid-cols-1 gap-10 pt-8 md:grid-cols-2 md:pt-12.5"
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
        className="mx-auto flex w-full max-w-260 flex-col items-center gap-8 px-4 py-12 md:flex-row md:justify-between md:gap-0 md:py-25 xl:px-0"
      >
        <SiteLogo className="h-14 w-auto sm:h-18.5" />

        <div className="flex flex-wrap items-center justify-center gap-2.5">
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
