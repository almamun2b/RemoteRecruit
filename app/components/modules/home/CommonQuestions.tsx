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
    <section className="mx-auto mt-16 w-full max-w-260 px-5 sm:mt-25 lg:mt-37 xl:px-0 2xl:mt-50">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center text-3xl leading-tight font-medium text-[#11142D] sm:text-4xl md:text-[40px] md:leading-13 lg:text-left"
      >
        Common Questions
      </motion.h2>

      <motion.div
        className="mt-10 space-y-10 sm:mt-15"
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
            className="text-[17px] leading-relaxed sm:text-[19px] sm:leading-8.75"
          >
            <h3 className="mb-3 font-medium text-[#11142D]">{item.question}</h3>
            <p className="mx-auto font-normal text-[#6D6E7A] lg:mx-0">
              {item.answer}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex justify-center lg:justify-start"
      >
        <Button
          className="mt-10 h-16.5 w-full max-w-70 border-2 border-[#53B4DAB1] px-7.5 text-base leading-5.25 font-semibold text-[#1E3E85] hover:bg-[#53B4DA]/20 sm:mt-15 lg:w-auto"
          variant="outline"
        >
          More Questions
        </Button>
      </motion.div>
    </section>
  )
}

export default CommonQuestions
