import { PlayIcon } from "~/components/icons/Play"
import GruCard from "./GruCard"
import SectionCard from "./SectionCard"

const data = {
  section: "Custom Profile",
  title: "Showcase Your Talents",
  description:
    "Personalize your profile with everything that makes you unique. Add an introductory video and other media for a personal touch that stands out to employers and candidates.",
  profile: {
    image: "/images/customProfile.png",
    feedback: [
      {
        id: 1,
        image: "/images/gru.png",
        title: "Past Client Feedback",
        name: "Best Developer Ever!",
        yellowBorder: true,
      },
    ],
    technology: [
      "Python Dev",
      "Javascript",
      "Front End",
      "Back End",
      "IOS Development",
    ],
  },
}

const CustomProfile = () => {
  return (
    <div className="mx-auto mt-25 grid w-full max-w-260 grid-cols-1 items-center gap-10 lg:grid-cols-2">
      <SectionCard card={data} />
      <div className="mx-auto">
        <div className="relative flex max-w-88.75 flex-col gap-9 rounded-[34px] border border-[#F6F4FF] bg-white p-5 pb-9.25 shadow-[14px_41px_100px_0px_#3159D31F]">
          <div className="absolute top-0 -left-10 size-5.5 rounded-full bg-[linear-gradient(132.56deg,#52B4DA_5.63%,#1E3E85_106.18%)]"></div>
          <div className="relative w-full">
            <div className="absolute -right-11.5 -bottom-11.5 flex size-22.75 items-center justify-center rounded-full bg-[linear-gradient(132.56deg,#52B4DA_5.63%,#1E3E85_106.18%)] shadow-[14px_41px_50px_0px_#3159D312]">
              <img
                src="/images/gru.png"
                width={75}
                height={75}
                alt="findWork"
                className="size-18.75 rounded-full object-cover"
              />
            </div>
            <PlayIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <img
              src={data.profile.image}
              width={315}
              height={176}
              alt="findWork"
              className="h-auto w-full rounded-[16px] object-cover"
            />
          </div>
          {data.profile.feedback.map((freelancer, index) => (
            <GruCard
              key={freelancer.id}
              gru={freelancer}
              className={index === 0 ? "-ml-20" : "-mr-20"}
            />
          ))}

          <ul className="flex flex-wrap items-center gap-4">
            {data.profile.technology.map((tec, index) => (
              <li
                key={index}
                className="flex h-8 items-center justify-center rounded-[8px] bg-[linear-gradient(132.56deg,#5799EB1A_5.63%,#9F74FB1A_106.18%)] px-3"
              >
                <p className="bg-[linear-gradient(129.98deg,#52B4DA_-106.35%,#1E3E85_95.25%)] bg-clip-text text-[12px] leading-5.25 font-medium text-transparent">
                  {tec}
                </p>
              </li>
            ))}
            <li className="flex h-8 items-center justify-center rounded-full bg-[linear-gradient(132.56deg,#5799EB1A_5.63%,#9F74FB1A_106.18%)] px-3">
              <p className="bg-[linear-gradient(129.98deg,#52B4DA_-106.35%,#1E3E85_95.25%)] bg-clip-text text-[12px] leading-5.25 font-medium text-transparent">
                +12
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CustomProfile
