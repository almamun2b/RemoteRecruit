import { motion } from "framer-motion";
import { RightArrowIcon } from "~/components/icons/RightArrow";
import { Button } from "~/components/ui/button";

const data = {
  subTitle: "Are you ready?",
  title: "Help is only a few clicks away!",
  description: "Click Below to get set up super quickly and find help now!",
  buttonText: "Get Started",
};

const GetStarted = () => {
  return (
    <div className="mt-16 sm:mt-25 lg:mt-37 grid min-h-152.5 w-full grid-cols-1 bg-[url('/images/getStarted.webp')] bg-cover bg-center lg:grid-cols-2 overflow-hidden">
      
      {/* Image Side - Stays at bottom (order-2) on mobile/tab, shifts to left row position (lg:order-1) on desktop */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="mt-10 lg:mt-25.25 px-5 sm:px-10 lg:px-0 lg:pr-4 order-2 lg:order-1 w-full mx-auto max-w-180 lg:max-w-none lg:self-end pb-10 lg:pb-0"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mr-auto w-full rounded-[32px] lg:rounded-none lg:rounded-tr-[40px] bg-white p-3 sm:p-5 lg:pt-3 lg:pr-4 lg:pb-0 lg:pl-0 shadow-[15.18px_44.45px_108.41px_0px_#3159D31F]"
        >
          <img
            src="/images/findWork.webp"
            width={676}
            height={496}
            alt="Find professional job opportunities nearby"
            className="h-auto w-full rounded-[24px] lg:rounded-none lg:rounded-tr-[36px] object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Text Content Side - Stays at top (order-1) and centers below lg breakpoint */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left px-5 pt-16 lg:pt-0 lg:pl-17.5 order-1 lg:order-2 w-full mx-auto lg:mx-0"
      >
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base leading-7.5 font-semibold text-[#1E3E85]"
        >
          {data.subTitle}
        </motion.span>

        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-2.5 max-w-97.5 text-[32px] sm:text-[44px] leading-10 sm:leading-14.25 font-semibold text-[#11142D]"
        >
          {data.title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-6 max-w-82.5 text-base sm:text-lg leading-relaxed sm:leading-8.25 text-[#767784]"
        >
          {data.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <Button className="mt-8 sm:mt-12.75 h-15.25 w-45 justify-start rounded-full bg-[#52B4DA]/16 text-base leading-6 font-medium text-[#1E3E85] hover:bg-[#53B4DA]/30">
            <div className="flex size-11.5 items-center justify-center rounded-full bg-[#52B4DA]">
              <RightArrowIcon className="min-w-7" />
            </div>
            {data.buttonText}
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GetStarted;