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
    <div className={cn("w-full max-w-125", className)}>
      <div className="inline-flex h-9 items-center justify-center rounded-full bg-[#C2EEFF] px-5 text-xs leading-3.75 font-semibold tracking-[0.4] text-[#11142D]">
        {card.section}
      </div>

      <h2 className="mt-6 text-3xl leading-tight font-medium text-[#11142D] sm:mt-9 sm:text-4xl md:text-[40px] md:leading-13">
        {card.title}
      </h2>

      <p className="mt-5 text-[17px] leading-relaxed text-[#11142DA4] sm:mt-8 sm:text-[19px] sm:leading-8.75">
        {card.description}
      </p>
    </div>
  )
}

export default SectionCard
