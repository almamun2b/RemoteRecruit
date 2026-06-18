import { cn } from "~/lib/utils"

interface GruCardProps {
  className?: string
  gru: {
    id: number
    image: string
    title: string
    name: string
    yellowBorder?: boolean
    imageClass?: string
    titleClass?: string
  }
}

const GruCard = ({ className, gru }: GruCardProps) => {
  return (
    <div
      className={cn(
        `flex max-w-88 items-center gap-2.75 rounded-full border border-[#F6F4FF] bg-white p-1.5 shadow-[14px_10px_30px_0px_#3159D31F]`,
        className
      )}
    >
      <div
        className={`flex size-15.25 items-center justify-center rounded-full shadow-[14px_10px_30px_0px_#3159D31F] ${gru.yellowBorder ? "bg-[linear-gradient(132.56deg,#FFED43_5.63%,#F29939_106.18%)]" : "bg-[linear-gradient(135deg,#EBEDFF7A,#ADB8FF7A)]"}`}
      >
        <img
          src={gru.image}
          width={53}
          height={53}
          alt="findWork"
          className={cn(`size-13.25 rounded-full object-cover`, gru.imageClass)}
        />
      </div>
      <div className="">
        <p
          className={cn(
            "text-sm leading-5.25 font-semibold text-[#1E3E85]",
            gru?.titleClass
          )}
        >
          {gru.title}
        </p>
        <p className="text-[17px] leading-6 font-medium text-[#11142D]">
          {gru.name}
        </p>
      </div>
    </div>
  )
}

export default GruCard
