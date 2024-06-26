import Image from "next/image";
import AllFeatures from "./components/AllFeatures"
type Props = {}

export const WhyChoose = (props: Props) => {
  return (
    <section className="flex flex-col items-center justify-center  gap-5 my-20">
       
       <h1 className="text-3xl lg:text-4xl w-[75%] font-bold text-center">Why </h1>
       <p className="text-[13px] md:pr-20 w-[85%] md:w-[80%] lg:w-1/2 md:ml-14 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.</p>

       <AllFeatures/>

    </section>
  )
}

export default WhyChoose;