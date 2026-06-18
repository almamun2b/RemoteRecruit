import { Icon } from "~/components/icons/Icon"
import GruCard from "./GruCard"
import SectionCard from "./SectionCard"

const data = {
  section: "Global Reach",
  title: "The First Fully Global Job Board, Anywhere, Ever",
  description:
    "RemoteRecruit connects candidates with opportunities around the world. With today’s remote-first workforce, you need to be able to find the best jobs and the best people for them, wherever they may be.",
  market: {
    image: "/images/globalReach.png",
    freelancers: [
      {
        id: 1,
        image: "/images/gru.png",
        title: "Python Developer",
        name: "Felonious Gru",
        yellowBorder: true,
      },
      {
        id: 2,
        image: "/images/gru.png",
        title: "Front End Wizard",
        name: "Mel Muselphiem",
        yellowBorder: true,
        titleClass: "text-[#52B4DA]",
      },
    ],
  },
}

const GlobalReach = () => {
  return (
    <div className="mx-auto mt-25 grid w-full max-w-260 grid-cols-1 items-center gap-10 lg:grid-cols-2">
      <SectionCard card={data} />
      <div className="mx-auto">
        <div className="relative flex max-w-88.75 flex-col gap-9 rounded-[34px] border border-[#F6F4FF] bg-white p-5 pb-9.25 shadow-[14px_41px_100px_0px_#3159D31F]">
          <div className="absolute top-0 -left-10 size-5.5 rounded-full bg-[linear-gradient(132.56deg,#52B4DA_5.63%,#1E3E85_106.18%)]"></div>
          <div className="relative w-full">
            <div className="absolute -right-11.5 -bottom-11.5 flex size-22.75 items-center justify-center rounded-full bg-[linear-gradient(132.56deg,#52B4DA_5.63%,#1E3E85_106.18%)] shadow-[14px_41px_50px_0px_#3159D312]">
              <Icon className="h-auto w-12" />
            </div>
            <img
              src={data.market.image}
              width={315}
              height={176}
              alt="findWork"
              className="h-auto w-full rounded-[16px] object-cover"
            />
          </div>
          {data.market.freelancers.map((freelancer, index) => (
            <GruCard
              key={freelancer.id}
              gru={freelancer}
              className={index === 0 ? "-ml-20" : "-mr-20"}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default GlobalReach
