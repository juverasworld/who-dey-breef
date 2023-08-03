import { FaMapMarkerAlt } from 'react-icons/fa';
import hero from '../public/hero.png'
import { FaCalendarAlt } from 'react-icons/fa';
import Image from "next/image"
const Hero = () => {
    return (<>
        <section className="mx-2">
            <div className="text-center  my-10 mx-3 "><p className="md:text-5xl text-[36px] font-bold whitespace-normal">Unlock The Secrets Of <br className="md:flex hidden" /> Wealthy Trading in 5 Days!</p>
                <p className="text-gray-400 my-3 md:text-center text-justify">Trade your way out of recession with this one-of-a-kind opportunity to immerse yourself in the world of <br className="md:flex hidden" />physical trading and gain invaluable knowledge from industry experts.</p>
                <p><button className="rounded-full px-5 py-2 bg-[#D8383A] text-white font-bold">Enroll now!</button></p>
                <p className='mx-auto my-10'>
                    <Image src={hero} alt="join us" width={500} height={550} className='mx-auto h-auto w-auto' />
                </p>

                <div className="mt-16">
                    <p className='font-bold md:text-3xl text-2xl text-center'>Your experience level is not <br className="md:flex hidden" />important</p>
                    <p className="text-gray-400 my-3 md:text-center text-justify">Whether you are a seasoned trader looking to enhance your skills or a newcomer eager to <br className="md:flex hidden" /> dive into this exciting field, this immersive and comprehensive program is tailored to meet <br className="md:flex hidden" /> your needs and take your trading game to new heights in just 5 days!</p>

                </div>
                <div className=" flex  md:flex-row flex-col align-center   justify-center w-full my-3">
                    <p className='flex align-center items-center rounded-full px-4 py-2 font-bold space-x-3 bg-gray-100 mx-3 my-2'> <span>
                        <FaCalendarAlt size={20} />

                    </span>
                        <span className='font-bold'>
                            August 11th- August 14th 2023
                        </span>
                    </p>

                    <p className='flex align-center items-center rounded-full px-4 py-2 font-bold space-x-2 bg-gray-100 mx-3 my-2  '>
                        <span>
                            <FaMapMarkerAlt size={20} />
                        </span>
                        <span className=''>
                            DABA Head Office Lekki Phase 1
                        </span>
                    </p>
                </div>
                <p className='mt-5'><button className="rounded-full px-5 py-2 tex-sm font-bold  bg-[#D8383A] text-white">Enroll now!</button></p>
                <div className='md:my-16 my-5'>
                    <div className=" flex  md:flex-row flex-col align-center   justify-center w-full my-3 space-x-4">
                        <p className='my-2'><button className="bg-[#D8383A] px-3  rounded-full w-full py-3 tex-sm font-semi-bold ">IN DEPT UNDERSTANDING</button></p>
                        <p className='my-2'> <button className=" px-3 py-3 tex-sm font-semi-bold bg-[#07A16A] rounded-full w-full">REAL LIFE CASE STUDIES</button></p>
                    </div>
                    <div className=" flex  md:flex-row flex-col align-center   justify-center w-full my-5 space-x-4">
                        <p className='my-2'><button className="bg-[#D8383A] px-3 py-3 tex-sm font-semi-bold rounded-full w-full">INTENSIVE ONE-ON-ONES</button></p>
                        <p className='my-2'> <button className="px-3 py-3 tex-sm font-semi-bold bg-[#07A16A] rounded-full w-full">LIVE WEALTH CREATION</button></p>
                    </div>
                </div>
            </div>
        </section>
                <div className=" bg-[#D8383A] ">
                    <div className="flex md:flex-row flex-col justify-center py-10 text-white md:space-x-10">
                        <div className=" text-white"> <p className='text-3xl font-bold'>
                            Your Wealth <br /> Creation Story <br /> Awaits You!
                        </p>
                            <p className='mt-5 md:flex hidden'><button className="rounded-full px-5 py-2 tex-sm font-bold  bg-white text-black">Enroll now!</button></p></div>
                            <div className="">


                        <ul className="custom-list mt-6 ml-0">
                        <p>Program details</p>
                            <li>DABA Head Ofiice, Lekki Lagos </li>
                            <li>Friday, August 11 2023 </li>
                            <li>Monday, August 14 2023 </li>
                        </ul>
                            </div>

                    </div>
                    <p className='mt-3 md:hidden flex'><button className="rounded-full px-5 py-2 tex-sm font-bold  bg-white text-black">Enroll now!</button></p>
                </div>

                <div className="flex justify-center items-center md:my-24 my-10">
  <div className="bg-[#FCEFEF] text-center p-4 rounded-2xl ">
    <p className="font-bold md:text-3xl text-2xl">
      Don't miss out on this <br /> opportunity to transform your <br className='md:block hidden' /> trading journey!
    </p>
    <p className="text-gray-700 my-3">
      This live trading class goes beyond just theoretical knowledge – it provides you with
      <br className="md:block hidden" /> practical skills, expert guidance, and ongoing support to become a confident and
      <br className="md:block hidden" /> successful trader in the dynamic mar financial market!
    </p>
    <p className=''><button className="rounded-full px-5 py-2 tex-sm font-bold  bg-[#D8383A] text-white">Enroll now!</button></p>
  </div>
</div>

    </>);
}

export default Hero;