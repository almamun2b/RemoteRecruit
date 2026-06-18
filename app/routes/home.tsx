import ActuallyFeeFree from "~/components/modules/home/ActuallyFeeFree"
import CommonQuestions from "~/components/modules/home/CommonQuestions"
import CustomProfile from "~/components/modules/home/CustomProfile"
import GetStarted from "~/components/modules/home/GetStarted"
import GlobalReach from "~/components/modules/home/GlobalReach"
import Hero from "~/components/modules/home/Hero"

export default function Home() {
  return (
    <>
      <Hero />
      <GlobalReach />
      <ActuallyFeeFree />
      <CustomProfile />
      <GetStarted />
      <CommonQuestions />
    </>
  )
}
