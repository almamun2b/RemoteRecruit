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

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ease-out ${
        scrolled
          ? "h-20 bg-[linear-gradient(131.63deg,#1E3E85_6.87%,#336DA6_106.04%)] shadow-lg"
          : "h-27 bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-full w-full max-w-360 items-center justify-between px-12.5">
        <SiteLogo className="h-12.5 w-auto transition-all duration-300" />

        <div className="flex items-center gap-7.5">
          <Button
            asChild
            className="text-sm font-semibold tracking-[0.4px] text-[#F5F7FE]"
            variant="link"
          >
            <Link to="/">Sign In</Link>
          </Button>
          <Button
            asChild
            className="h-11 w-23 rounded-[16px] bg-[#4DA8CCE5] px-4 py-2.5 text-sm font-semibold tracking-[0.4px] text-[#F5F7FE] hover:bg-[#4DA8CC]/70"
          >
            <Link to="/">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
