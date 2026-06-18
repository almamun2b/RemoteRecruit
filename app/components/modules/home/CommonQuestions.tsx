import { motion } from "framer-motion"
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
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-[40px] leading-13 font-medium text-[#11142D]"
      >
        Common Questions
      </motion.h2>

      <motion.div
        className="mt-15 space-y-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.2,
            },
          },
        }}
      >
        {faqData.map((item) => (
          <motion.div
            key={item.id}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[19px] leading-8.75"
          >
            <h3 className="mb-3 font-medium text-[#11142D]">{item.question}</h3>
            <p className="font-normal text-[#6D6E7A]">{item.answer}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Button
          className="mt-15 h-16.5 border-2 border-[#53B4DAB1] px-7.5 text-base leading-5.25 font-semibold text-[#1E3E85] hover:bg-[#53B4DA]/20"
          variant="outline"
        >
          More Questions
        </Button>
      </motion.div>
    </section>
  )
}

export default CommonQuestions
