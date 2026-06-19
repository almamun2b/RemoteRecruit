import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Link } from "react-router"
import { SiteLogo } from "../icons/Logo"
import { Button } from "../ui/button"

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ease-out ${
        scrolled
          ? "h-16 bg-[linear-gradient(131.63deg,#1E3E85_6.87%,#336DA6_106.04%)] shadow-lg md:h-20"
          : "h-20 bg-transparent md:h-27"
      }`}
    >
      <div className="mx-auto flex h-full w-full max-w-360 items-center justify-between px-4 sm:px-6 md:px-12.5">
        <motion.div
          animate={{
            scale: scrolled ? 0.92 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <SiteLogo className="h-9 w-auto transition-all duration-300 sm:h-11 md:h-12.5" />
        </motion.div>

        <div className="flex items-center gap-3 sm:gap-5 md:gap-7.5">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          >
            <Button
              asChild
              className="px-2 text-xs font-semibold tracking-[0.4px] text-[#F5F7FE] sm:px-4 sm:text-sm"
              variant="link"
            >
              <Link to="/">Sign In</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          >
            <Button
              asChild
              className="h-9 w-20 rounded-[12px] bg-[#4DA8CCE5] px-3 py-2 text-xs font-semibold tracking-[0.4px] text-[#F5F7FE] hover:bg-[#4DA8CC]/70 sm:h-11 sm:w-23 sm:rounded-[16px] sm:px-4 sm:text-sm md:py-2.5"
            >
              <Link to="/">Sign Up</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}

export default Header
