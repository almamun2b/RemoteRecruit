import { RightArrowIcon } from "~/components/icons/RightArrow"
import { Button } from "~/components/ui/button"

const data = {
  subTitle: "Are you ready?",
  title: "Help is only a few clicks away!",
  description: "Click Below to get set up super quickly and find help now!",
  buttonText: "Get Started",
}

const GetStarted = () => {
  return (
    <div className="mt-37 grid min-h-152.5 w-full grid-cols-1 bg-[url('/images/getStarted.png')] bg-cover bg-center lg:grid-cols-2">
      <div className="mt-25.25 pr-4">
        <div className="mr-auto rounded-tr-[40px] bg-white pt-3 pr-4 shadow-[15.18px_44.45px_108.41px_0px_#3159D31F]">
          <img
            src="/images/findWork.png"
            width={676}
            height={496}
            alt="findWork"
            className="h-auto w-full rounded-tr-[36px] object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center pl-17.5">
        <span className="text-base leading-7.5 font-semibold text-[#1E3E85]">
          {data.subTitle}
        </span>
        <h3 className="mt-2.5 max-w-97.5 text-[44px] leading-14.25 font-semibold text-[#11142D]">
          {data.title}
        </h3>
        <p className="mt-6 max-w-82.5 text-lg leading-8.25 text-[#767784]">
          {data.description}
        </p>
        <Button className="mt-12.75 h-15.25 w-45 justify-start rounded-full bg-[#52B4DA]/16 text-base leading-6 font-medium text-[#1E3E85] hover:bg-[#53B4DA]/30">
          <div className="flex size-11.5 items-center justify-center rounded-full bg-[#52B4DA]">
            <RightArrowIcon className="min-w-7" />
          </div>
          {data.buttonText}
        </Button>
      </div>
    </div>
  )
}

export default GetStarted
