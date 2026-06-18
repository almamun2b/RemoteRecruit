import { cn } from "~/lib/utils"

interface SectionCardProps {
  className?: string
  card: {
    section: string
    title: string
    description: string
  }
}

const SectionCard = ({ card, className }: SectionCardProps) => {
  return (
    <div className={cn("max-w-125", className)}>
      <div className="inline-flex h-9 items-center justify-center rounded-full bg-[#C2EEFF] px-5 text-xs leading-3.75 font-semibold tracking-[0.4] text-[#11142D]">
        {card.section}
      </div>
      <h3 className="mt-9 text-[40px] leading-13 font-medium text-[#11142D]">
        {card.title}
      </h3>
      <p className="mt-8 text-[19px] leading-8.75 text-[#11142DA4]">
        {card.description}
      </p>
    </div>
  )
}

export default SectionCard
