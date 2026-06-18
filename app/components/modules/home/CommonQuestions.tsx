import { Button } from "~/components/ui/button"

const faqData = [
  {
    id: 1,
    question: "Do I have to sign a long-term contract?",
    answer:
      "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party",
  },
  {
    id: 2,
    question: "Can I pay for a whole year?",
    answer:
      "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage",
  },
  {
    id: 3,
    question: "What if I need help?",
    answer:
      "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party",
  },
]

const CommonQuestions = () => {
  return (
    <section className="mx-auto mt-37 w-full max-w-260">
      <h2 className="text-[40px] leading-13 font-medium text-[#11142D]">
        Common Questions
      </h2>

      <div className="mt-15 space-y-10">
        {faqData.map((item) => (
          <div key={item.id} className="text-[19px] leading-8.75">
            <h3 className="mb-3 font-medium text-[#11142D]">{item.question}</h3>
            <p className="font-normal text-[#6D6E7A]">{item.answer}</p>
          </div>
        ))}
      </div>

      <Button
        className="mt-15 h-16.5 border-2 border-[#53B4DAB1] px-7.5 text-base leading-5.25 font-semibold text-[#1E3E85] hover:bg-[#53B4DA]/20"
        variant="outline"
      >
        More Questions
      </Button>
    </section>
  )
}

export default CommonQuestions
