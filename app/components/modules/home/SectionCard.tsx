import { cn } from "~/lib/utils";

interface SectionCardProps {
  className?: string;
  card: {
    section: string;
    title: string;
    description: string;
  };
}

const SectionCard = ({ card, className }: SectionCardProps) => {
  return (
    <div className={cn("w-full max-w-125", className)}>
      <div className="inline-flex h-9 items-center justify-center rounded-full bg-[#C2EEFF] px-5 text-xs leading-3.75 font-semibold tracking-[0.4] text-[#11142D]">
        {card.section}
      </div>

      <h3 className="mt-6 sm:mt-9 text-3xl font-medium leading-tight text-[#11142D] sm:text-4xl md:text-[40px] md:leading-13">
        {card.title}
      </h3>

      <p className="mt-5 sm:mt-8 text-[17px] leading-relaxed text-[#11142DA4] sm:text-[19px] sm:leading-8.75">
        {card.description}
      </p>
    </div>
  );
};

export default SectionCard;