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
          ? "h-16 md:h-20 bg-[linear-gradient(131.63deg,#1E3E85_6.87%,#336DA6_106.04%)] shadow-lg"
          : "h-20 md:h-27 bg-transparent"
      }`}
    >
      {/* Handled safe responsive scaling for padding rules across devices */}
      <div className="mx-auto flex h-full w-full max-w-360 items-center justify-between px-4 sm:px-6 md:px-12.5">
        <motion.div
          animate={{
            scale: scrolled ? 0.92 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Logo scales gracefully downward on smaller screens */}
          <SiteLogo className="h-9 sm:h-11 md:h-12.5 w-auto transition-all duration-300" />
        </motion.div>

        {/* Desktop gap-7.5 drops to fluid spacing targets on mobile viewports */}
        <div className="flex items-center gap-3 sm:gap-5 md:gap-7.5">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          >
            <Button
              asChild
              className="text-xs sm:text-sm font-semibold tracking-[0.4px] text-[#F5F7FE] px-2 sm:px-4"
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
            {/* Action button scales geometries natively across layout changes */}
            <Button
              asChild
              className="h-9 sm:h-11 w-20 sm:w-23 rounded-[12px] sm:rounded-[16px] bg-[#4DA8CCE5] px-3 sm:px-4 py-2 md:py-2.5 text-xs sm:text-sm font-semibold tracking-[0.4px] text-[#F5F7FE] hover:bg-[#4DA8CC]/70"
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