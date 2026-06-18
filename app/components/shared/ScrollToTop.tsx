import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { RightArrowIcon } from "~/components/icons/RightArrow"

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400)
    }

    window.addEventListener("scroll", toggleVisibility, { passive: true })

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          whileHover={{
            y: -4,
            scale: 1.1,
            boxShadow:
              "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed right-8 bottom-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-[#52B4DA] to-[#1E3E85] text-white shadow-xl hover:from-[#4DA8CC] hover:to-[#1A366F]"
          aria-label="Scroll to top"
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center justify-center"
          >
            <RightArrowIcon className="ml-1 -rotate-90" />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
