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
    <footer className="relative mt-109.5 flex min-h-142.5 w-full flex-col bg-[url('/images/footer.png')] bg-cover bg-center">
      <section className="absolute top-0 left-1/2 w-full max-w-260 -translate-x-1/2 -translate-y-1/2">
        <h3 className="text-center text-[40px] leading-13 font-semibold text-[#11142D]">
          Help Is One Click Away
        </h3>

        <div className="grid w-full grid-cols-1 gap-10 pt-12.5 md:grid-cols-2">
          {plans.map((plan) => (
            <FooterCard key={plan.id} plan={plan} />
          ))}
        </div>
      </section>
      <div className="flex-1"></div>
      <div className="mx-auto flex w-full max-w-260 items-center justify-between py-25">
        <SiteLogo className="h-18.5 w-auto" />
        <div className="flex items-center gap-2.5">
          <Link to="/">
            <FacebookIcon className="hover:scale-110" />
          </Link>
          <Link to="/">
            <InstagramIcon className="hover:scale-110" />
          </Link>
          <Link to="/">
            <XIcon className="hover:scale-110" />
          </Link>
          <Link to="/">
            <TwitterIcon className="hover:scale-110" />
          </Link>
          <Link to="/">
            <LinkedinIcon className="hover:scale-110" />
          </Link>
          <Link to="/">
            <RedditIcon className="hover:scale-110" />
          </Link>
        </div>
      </div>
      <div className="border-t border-[#8BA3CC]/50 py-6">
        <Icon className="mx-auto" />
      </div>
    </footer>
  )
}

export default Footer
