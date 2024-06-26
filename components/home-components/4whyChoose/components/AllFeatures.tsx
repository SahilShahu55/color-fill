import Image from "next/image"

type Props = {}

const AllFeatures = (props: Props) => {
  return (
    <section className='bg-white  mt-10 flex flex-col  md:gap-0'>

        <div className="div1 px-5 md:px-20 flex flex-col-reverse md:flex-row  items-center justify-around md:h-[24rem] bg-[radial-gradient(ellipse_at_left_bottom,_var(--tw-gradient-stops))] from-[#C7E8F3] via-white to-white ">

            <div className="md:w-1/2 flex flex-col gap-5 ">
                
                <h1 className="gradientText2 font-bold">Change colors</h1>

                <h1 className=" text-xl md:text-3xl lg:text-4xl  lg:w-[70%] font-bold">Create a consistent brand identity</h1>
                <p className="text-[14px] lg:pr-20">{"With Colorfill, maintaining consistency across all your brand assets becomes effortless. You can scale and adapt images to fit various platforms and mediums while ensuring that they stay true to your brand's visual identity."}</p>

            </div>

            <div className=" md:w-1/2 flex items-center justify-center">
                <Image src="/icons/service1.svg" alt="service1" width={500} height={500} className="w-[60%]"/>
            </div>

        </div>

        <div className="div2 py-10 md:py-0 px-5 md:px-20 flex flex-col-reverse md:flex-row-reverse items-center justify-around md:h-[24rem] gap-10 md:gap-0 bg-[radial-gradient(ellipse_at_left_top,_var(--tw-gradient-stops))] from-[#C7E8F3] via-white to-white">

            <div className="md:w-1/2 flex flex-col gap-5">
                
                <h1 className="gradientText2 font-bold">Improved creativity</h1>

                <h1 className="text-xl md:text-3xl lg:text-4xl lg:w-[75%] font-bold">Save time, enhance productivity</h1>
                <p className="text-[14px] lg:pr-32">{"No more tedious manual editing or outsourcing to graphic designers. Colorfill empowers you to instantly change the color of your images, allowing you to focus on other important tasks and projects."}</p>

            </div>

            <div className=" md:w-1/2 flex items-center justify-center md:justify-start">
                <Image src="/icons/service2.svg" alt="service1" width={500} height={500} className="w-[52%]"/>
            </div>

        </div>
        
        <div className="div3 px-5 md:px-20 flex flex-col-reverse md:flex-row items-center justify-around md:h-[24rem]">

            <div className="md:w-1/2 flex flex-col gap-5">
                
                <h1 className="gradientText2 font-bold">Ease of use</h1>

                <h1 className="text-xl md:text-[28px] lg:text-4xl  font-bold">Elevate user experience</h1>
                <p className="text-[14px] lg:pr-24">{"Color plays a crucial role in user experience. By using Colorfill to customize your images, you can create visually appealing content that captivates and engages your audience, leaving a lasting impression."}</p>

            </div>

            <div className=" md:w-1/2 flex items-center justify-center bg-[radial-gradient(ellipse_at_center_center,_var(--tw-gradient-stops))] from-[#C7E8F3] via-white to-white">
                <Image src="/icons/service3.svg" alt="service1" width={500} height={500} className="w-[65%]"/>
            </div>

        </div>

        <div className="div4 pt-10 md:pt-0 px-5 md:px-20 flex flex-col-reverse md:flex-row-reverse items-center justify-around md:h-[24rem] gap-10 md:gap-0">

            <div className="md:w-1/2 flex flex-col gap-5">
                
                <h1 className="gradientText2 font-bold">Improved creativity</h1>

                <h1 className="text-xl md:text-[29px] lg:text-4xl lg:w-[75%] font-bold">Unleash your creativity anywhere, anytime</h1>
                <p className="text-[14px] lg:pr-24">{"Colorfill is designed to be fast and responsive, allowing you to edit your images on the go. Whether you're using it on your desktop or mobile device, you can enjoy the convenience of creating stunning visuals wherever inspiration strikes."}</p>

            </div>

            <div className=" md:w-1/2 flex items-center justify-center md:justify-start">
                <Image src="/icons/service2.svg" alt="service1" width={500} height={500} className="w-[52%]"/>
            </div>

        </div>

    </section>
  )
}

export default AllFeatures