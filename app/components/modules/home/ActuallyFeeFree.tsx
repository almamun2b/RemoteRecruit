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
    image: "/images/paypal.png",
    title: "14 Days - $79.99",
    name: "Upcoming Payment In…",
    yellowBorder: false,
    imageClass: "size-8 rounded-none",
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
    <div className="mx-auto mt-25 grid w-full max-w-260 grid-cols-1 items-center gap-10 lg:grid-cols-2">
      <div className="mx-auto">
        <div className="relative flex w-full min-w-88.75 flex-col rounded-[34px] border border-[#F6F4FF] bg-white p-8 pb-7 shadow-[14px_41px_100px_0px_#3159D31F]">
          <div className="absolute top-0 -left-10 size-5.5 rounded-full bg-[linear-gradient(132.56deg,#52B4DA_5.63%,#1E3E85_106.18%)]"></div>
          <span className="text-sm leading-4.5 font-semibold tracking-[1px] text-[#808191]">
            {data.plan.subTitle}
          </span>
          <p className="mt-2 bg-[linear-gradient(129.98deg,#52B4DA_-106.35%,#1E3E85_95.25%)] bg-clip-text text-xl leading-6 font-semibold tracking-[1.11px] text-transparent">
            {data.plan.title}
          </p>

          <div className="relative mt-5 w-full">
            <div className="absolute top-0 -right-16 flex size-22.75 items-center justify-center rounded-full bg-[linear-gradient(132.56deg,#52B4DA_5.63%,#1E3E85_106.18%)] shadow-[14px_41px_50px_0px_#3159D312]">
              <Icon className="h-auto w-12" />
            </div>
            <p className="text-[10px] leading-4.5 font-bold tracking-[1px] text-[#11142D82] uppercase">
              {data.plan.sectionTitle}
            </p>
            <ul className="mt-3 space-y-5">
              {data.plan.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-sm leading-6 text-[#323445E6]"
                >
                  <CheckIcon className="size-4 min-w-4" />
                  <p>{feature}</p>
                </li>
              ))}
            </ul>
          </div>
          <GruCard gru={data.payment} className="mt-9.5 -ml-24" />
        </div>
      </div>
      <SectionCard card={data} />
    </div>
  )
}

export default ActuallyFeeFree
