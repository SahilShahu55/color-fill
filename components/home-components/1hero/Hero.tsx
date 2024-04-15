import Link from "next/link"
import Image from "next/image"
import DragDropFiles from "./components/DragDropFiles"

type Props = {}

export const Hero = (props: Props) => {
  return (

    <div  className="HERO flex flex-col md:flex-row justify-between items-start  py-[2.5rem] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d8ebef] to-white   gap-20 md:gap-0 px-5 md:px-20">

        <div className=" w-full md:w-1/2 flex flex-col gap-10  md:gap-6 mt-10 ">

            <h1 className="text-[28px]  md:text-3xl  md:text-[30px] lg:text-[40px] font-[800] md:font-bold w-full md:w-[80%] lg:w-[60%] tracking-wide md:leading-[40px] lg:leading-[45px]">Change color of any image automatically</h1>

            <p className=" w-full text-xs md:text-[11px] lg:text-[15px] md:pr-6 lg:pr-16 ">{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}</p>

            <Link href="/">
              <button className= " bg-black text-white text-sm font-semibold px-8 py-3 rounded-lg active:scale-95 hover:bg-[#313852]">Get Started
              </button>
            </Link>
        </div> 

        <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-5 ">
          <DragDropFiles/>
        </div> 

        
    </div>
 
  )
}