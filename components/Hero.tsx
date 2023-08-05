import { FaMapMarkerAlt } from 'react-icons/fa';
import Link from "next/link"
import Copy from "./Copy";
import Pop from "./Pop";
import message from "../public/message.png"
import hero from '../public/hero.png'
import danger from '../public/danger.png'
import MrChris from "../public/MrChris.png"
import boss from "../public/boss.png"
import omzi from "../public/omzi.png"
import { FaCalendarAlt } from 'react-icons/fa';
import Image from "next/image";
import React, { useEffect } from 'react';
// import locomotiveScroll from 'locomotive-scroll';

const Hero = () => {
//    useEffect(() => {
//     const scroll = new LocomotiveScroll({
//       el: document.querySelector('#scroll-container'),
//       smooth: true, // Add other LocomotiveScroll options as needed
//     });

//     // Clean up LocomotiveScroll instance on unmount
//     return () => {
//       scroll.destroy();
//     };
//   }, []);
    return (
        <>
        <Pop/>
        <section className="mx-2">
            <div className="text-center  my-10 mx-3 "><p className="md:text-5xl text-[39px] hero font-extrabold whitespace-normal">Unlock The Secrets Of <br className="md:flex hidden" /> Wealthy Trading In 5 Days!</p>
                <p className="text-gray-400 my-3 md:text-center ">Trade your way out of recession with this one-of-a-kind opportunity to immerse yourself in the world of <br className="md:flex hidden" />physical trading and gain invaluable knowledge from industry experts.</p>
                <p className='my-10'><button className="rounded-full px-8  py-5 bg-[#D8383A] text-white whitespace-nowrap">Enroll now!</button></p>
                <p className='mx-auto my-10'>
                    <Image src={hero} alt="join us" width={600} height={550} className='mx-auto h-auto w-auto' />
                </p>

                <div className="mt-16">
                    <p className='font-extrabold md:text-3xl text-[33px] md:ml-0 ml-2 hero text-center'>Your experience level is not <br className="md:flex hidden" />important</p>
                    <p className="text-gray-400 my-10 text-center ">Whether you are a seasoned trader looking to enhance your skills or a newcomer eager to <br className="md:flex hidden" /> dive into this exciting field, this immersive and comprehensive program is tailored to meet <br className="md:flex hidden" /> your needs and take your trading game to new heights in just 5 days!</p>

                </div>
                <div className=" flex  md:flex-row flex-col align-center   justify-center w-full my-3">
                    <p className='flex align-center items-center rounded-full px-5 py-4 font-bold space-x-3 whitespace-nowrap   bg-gray-100 mx-3 my-2'> <span>
                        <FaCalendarAlt size={20} />

                    </span>
                        <span className='font-bold'>
                            August 11th- August 14th 2023
                        </span>
                    </p>

                    <p className='flex align-center items-center rounded-full px-5 py-4 font-bold space-x-3 bg-gray-100 mx-3 my-2 whitespace-nowrap '>
                        <span>
                            <FaMapMarkerAlt size={20} />
                        </span>
                        <span className=''>
                            DABA Head Office Lekki Phase 1
                        </span>
                    </p>
                </div>
                <p className='my-10'><button className="rounded-full px-8  py-5 bg-[#D8383A] text-white ">Enroll now!</button></p>
                <div className='md:my-16 my-5'>
                    <div className=" flex  md:flex-row flex-col align-center   justify-center w-full my-3 space-x-4">
                        <p className='my-2'><button className="bg-[#FBEBEB] px-3  rounded-full w-full md:py-3 py-5 tex-sm font-bold border-2 border-[#D8383A]  ">IN DEPT UNDERSTANDING</button></p>
                        <p className='my-2'> <button className=" md:px-10 px-16 md:py-3 py-5 text-sm bg-[#CDECE1] border-2 border-[#CDfCE1] font-bold rounded-full w-full">REAL LIFE CASE STUDIES</button></p>
                    </div>
                    <div className=" flex  md:flex-row flex-col align-center   justify-center w-full md:my-5 space-x-4">
                        <p className='md:mb-0   mb-2'><button className="bg-[#D4E6F7] px-3 md:py-3 py-5 tex-sm font-bold rounded-full w-full">INTENSIVE ONE-ON-ONES</button></p>
                        <p className='md:my-0 my-2'> <button className=" md:py-3 py-5 tex-sm font-bold bg-[#DDD9F8] rounded-full w-full px-8">LIVE WEALTH CREATION</button></p>
                    </div>
                </div>
            </div>
        </section>
        <div className=" bg-[#D8383A]  py-10">
            <div className="flex md:flex-row flex-col justify-center md:py-10 pt-24 md:px-0 px-5 text-white md:space-x-10">
                <div className=" text-white"> <p className='text-4xl font-bold leading-relaxed'>
                    Your Wealth <br /> Creation Story <br /> Awaits You!
                </p>
                    <p className='mt-5 md:flex hidden'><button className="rounded-full px-5 py-2 tex-sm font-bold  bg-white text-black">Enroll now!</button></p></div>
                <div className="md:m-0 mx-0">


                    <ul className="custom-list font-light mt-6 ml-0 ">
                        <p className='my-10 font-bold'>Program details</p>
                        <li className='my-5'>DABA Head Ofiice, Lekki Lagos </li>
                        <li className='my-5'>Friday, August 11 2023 </li>
                        <li className='my-5'>Monday, August 14 2023 </li>
                    </ul>
                </div>

            </div>
            <p className='mt-3 pb-24 mx-5 md:hidden flex text-center'><button className="rounded-full px-5 py-4 tex-sm font-bold  bg-white text-black">Get Started</button></p>
        </div>

        <div className="flex justify-center items-center md:my-32 my-16 px-5">
            <div className="bg-[#FCEFEF] text-center px-10  py-10 rounded-2xl ">
                <p className="font-bold md:text-3xl text-2xl">
                    Don&apos;t miss out on this <br /> opportunity to transform your <br className='md:block hidden' /> trading journey!
                </p>
                <p className="text-gray-700 my-5 ">
                    This live trading class goes beyond just theoretical knowledge – it provides you with
                    <br className="md:block hidden" /> practical skills, expert guidance, and ongoing support to become a confident and
                    <br className="md:block hidden" /> successful trader in the dynamic mar financial market!
                </p>
                <p className=''><button className="rounded-full px-8 py-5 tex-sm font-bold  bg-[#D8383A] text-white">Enroll now!</button></p>
            </div>
        </div>

        <div className="bg-black text-white py-5 ">
            <div className="flex justify-center items-center md:my-32 my-10 mx-5">
                <div className=" text-center p-4 rounded-2xl ">
                    <p className="font-bold md:text-3xl text-[27px]">This Masterclass is <br className="md:flex hidden" />designed to &apos;pay for itself &apos;</p>
                    <ul className='text-left'>
                        <li className="my-5">This masterclass is designed to “pay for itself” and put money back in <br className="md:flex hidden" /> your pocket even before the training is over!
                        </li>
                        <li className="my-5">You will get to make LIVE TRADES RIGHT AT THE EVENT and make <br className="md:flex hidden" /> yourself money while still learning the deep lessons of the market!</li>
                        <li className="my-5">
                            Don `&apos;`t miss this opportunity to become a savvy crypto trader!
                        </li>
                        <li className="my-5">Register now to secure your spot and embark on an exciting journey <br className="md:flex hidden" />towards financial freedom!</li>
                    </ul>
                    <p className='mt-3 '><button className="rounded-full px-16 py-7 tex-sm font-bold  bg-white text-black">Enroll now!</button></p>
                </div>
            </div>
        </div>
        <div className="flex md:flex-row  justify-center   flex-col ">
            <div className=" my-10 mx-5">
                <p className="text-2xl   font-bold text-gray-400">Learn from</p>
                <p className="font-bold text-5xl my-4 hero ">Chris Ani</p>
                <div className="text-gray-400">

                    <p className="">Chris Ani is an insightful teacher, author, entrepreneur, startup advisor,<br className="md:flex hidden" /> crypto-trader and investor.</p>
                    <p className="">He is passionate about helping people create wealth and achieve  <br className="md:flex hidden" />success. A passion that birthed Daba.school, the first African education <br className="md:flex hidden" /> platform for digital and high income skill learning, with students in over<br className="md:flex hidden" /> 15 nations.</p>
                    <p className="">In 2017, Chris Ani pioneered Cryptohub.club, the ﬁrst platform in <br className="md:flex hidden" />Nigeria for bitcoin, blockchain and cryptocurrency education, which <br className="md:flex hidden" />receives monthly web visitors from over 40 nations.</p>
                    <p className="">He is the 2020 recipient of the Binance Influencer Award for Africa and <br className="md:flex hidden" />the Middle East.</p>
                </div>
                <p className='mt-5'><button className="rounded-full px-7 py-5 tex-sm  bg-[#D8383A] text-white">Enroll now!</button></p>
            </div>
            <div className="">
                <Image src={MrChris} width={400} height={450} className='w-auto h-auto' alt="No network" />
            </div>
        </div>
        <div className="font-bold item-center text-center md:text-5xl text-3xl my-16 hero">Guest Tutors</div>
        <div className='flex md:flex-row flex-col mx-auto  align-middle md:items-stretch text-gray-500 my-5 items-center'>

            <p className='px-3 py-5'>

                <Image src={omzi} width={275} height={350} className='' alt="No network" />
            </p>
            <p className="px-5 py-5">Millz is one of the crypto market analyst , he is <br className="md:flex hidden" />a very patient and skillful trader with massive <br className="md:flex hidden" /> success and wins in the market  .He is also <br className="md:flex hidden" />one of the market analyst at Cryptohub <br className="md:flex hidden" />working closely with chris Ani to deliver solid<br className="md:flex hidden" /> experience for the community.</p>

            <p className='px-3 py-5'>

                <Image src={boss} width={200} height={250} className='w-auto h-auto' alt="Mr Ozi" />
            </p>
            <p className='px-5 py-5'>
                Mr Ozi he is a solid trader and market analyst <br className="md:flex hidden" /> at Cryptohub.club with over 4 years <br className="md:flex hidden" />experience
            </p>

        </div>
        <div className="bg-[rgb(28,151,108)] py-3">

            <div className="flex justify-center items-center md:my-32 my-16   px-5">
                <div className="bg-[#E6F6F0] flex md:flex-row flex-col items-center px-10  py-10 rounded-2xl ">
                    <p className="">
                        <Image src={danger} width={100} height={80} alt="Go Register" className="w-auto h-auto" /></p>
                    <div>
                        <p>There are just 10 slots avaliable!</p>
                        <p>This training is definitely NOT for everyone!</p>
                        <p className="">
                            We are only interested in getting SERIOUS-MINDED individuals who are <br className="md:flex hidden" /> ready to change their financial story and trade their way into wealth!</p>
                        <p>And so we are only taking 10 persons into this program.<br className="md:flex hidden" />
                            HENCE, THIS IS A FIRST COME FIRST SERVE OFFER!</p>
                        <p className='mt-3 items-center flex justify-center text-center '><button className="rounded-full px-8 py-5 items-center tex-sm font-bold  text-white bg-black">Enroll now!</button></p>
                    </div>

                </div>

            </div>
        </div>
        <div className="md:my-16">
            <div className=" text-center font-bold text-3xl my-5 ">Here&apos;s Everything You&apos;ll Get: </div>
            <div className=" mx-5 px-5 py-10">

                <div className=' flex md:flex-row flex-col md:items-center md:space-x-10 md:mx-5 mx-2'>
                    <div className='border-2 px-3 py-4 rounded-2xl my-5 bg-[#FBEBEB] md:w-1/3 '>
                        <span className='border-2 border-orange-500 font-bold px-3 rounded-md py-1'>
                            1
                        </span>
                        <div className='font-bold hero my-3'> Crypto Market Fundamentals</div>
                        <div className='pb-12'>Understand the core concepts and principles that drive the cryptocurrency market, including <br className='md:flex hidden' /> blockchain technology, decentralized finance <br className='md:flex hidden' /> (DEFI), and  tokenomics.</div>
                    </div>
                    <div className='border-2 px-3 py-4 rounded-2xl my-5 bg-[#FBEBEB] md:w-1/3 '>
                        <span className='border-2 border-orange-500 font-bold px-3 rounded-md py-1'>
                            2
                        </span>
                        <div className='font-bold hero my-3'> Technical Analysis Skills</div>
                        {/*      moving averages, and oscillators. */}
                        <div className=''>Master the art of analyzing charts, trends, entry and indicators to identify profitable exit  points for your trades.</div>
                        <p className="pb-6">Gain insights into moving avearges and oscillators.</p>
                    </div>

                    <div className='border-2 px-3 py-4 rounded-2xl my-5 bg-[#FBEBEB] md:w-1/3'>
                        <span className='border-2 border-orange-500 font-bold px-3 rounded-md py-1'>
                            3
                        </span>
                        {/*     */}
                        <div className='font-bold hero my-3'> Risk Management Skills</div>
                        <div className='pb-5'>Discover essential risk management techniques to protect your capital and minimize potential losses.  Learn how to set stop-loss orders, calculate position sizing, and effectively manage your trading portfolio.</div>
                    </div>

                </div>
                <div className=' flex md:flex-row flex-col md:items-center md:space-x-10 md:mx-5 mx-2'>
                    <div className='border-2 px-3 py-4 rounded-2xl my-5 bg-[#FBEBEB] md:w-1/3'>
                        <span className='border-2 border-orange-500 font-bold px-3 rounded-md py-1'>
                            4
                        </span>
                        <div className='font-bold hero my-3'>Fundamentals Analysis</div>
                        <div className='pb-5'>Explore the key factors that influence cryptocurrency prices, such as news events, partnerships, regulatory developments, and market sentiment. Learn how to evaluate the fundamentals of different cryptocurrencies and make informed investment decisions.</div>
                    </div>
                    <div className='border-2 px-3 py-4 rounded-2xl my-5 bg-[#FBEBEB] md:w-1/3'>
                        <span className='border-2 border-orange-500 font-bold px-3 rounded-md py-1'>
                            5
                        </span>
                        <div className='font-bold hero my-3'>Market Psychology</div>
                        <div className='pb-16'>Uncover the psychological aspects of trading and develop a strong mindset for success.
                            Learn how to control emotions, overcome fear and greed, and stay disciplined in volatile market conditions.</div>
                    </div>
                    <div className='border-2 px-3 py-4 rounded-2xl my-5 bg-[#FBEBEB] md:w-1/3'>
                        <span className='border-2 border-orange-500 font-bold px-3 rounded-md py-1'>
                            7
                        </span>
                        <div className='font-bold hero my-3'> Crypto Market Fundamentals</div>
                        <div className='pb-9'>Get hands-on experience with popular cryptocurrency trading platforms, tools, and order types. Learn how to execute trades effectively, set up stop orders, and utilize advanced features for enhanced trading efficiency.</div>
                    </div>

                </div>
                <div className=' flex md:flex-row flex-col md:items-center md:space-x-10 md:mx-5 mx-2'>
                    <div className='border-2 px-3 py-4 rounded-2xl my-5 bg-[#FBEBEB] md:w-1/3'>
                        <span className='border-2 border-orange-500 font-bold px-3 rounded-md py-1'>
                            7
                        </span>
                        <div className='font-bold hero my-3'> Risk Assessement And Due Dilligence</div>
                        <div className='pb-12'>Discover the importance of conducting thorough research before investing in cryptocurrencies. Learn how to evaluate projects, read white papers, assess team credibility, and spot potential scams or red flags.</div>
                    </div>
                    <div className='border-2 px-3 py-4 rounded-2xl my-5 bg-[#FBEBEB] md:w-1/3'>
                        <span className='border-2 border-orange-500 font-bold px-3 rounded-md py-1'>
                            8
                        </span>
                        <div className='font-bold hero my-3'> Mentorship from Seasoned Traders </div>
                        <div className='pb-5'>Gain access to experienced cryptocurrency traders who will guide you through the complexities of the market. Learn from their expertise, receive personalized feedback, and have your trading strategies reviewed for continuous improvement.</div>
                    </div>
                    <div className='border-2 px-3 py-4 rounded-2xl my-5 bg-[#FBEBEB] md:w-1/3'>
                        <span className='border-2 border-orange-500 font-bold px-3 rounded-md py-1'>
                            9
                        </span>
                        <div className='font-bold hero my-3'> Real-Time Marketing Insights</div>
                        <div className='pb-5'>Stay up-to-date with the latest market trends and developments. Our class provides real-time analysis and insights into the ever-changing cryptocurrency landscape, ensuring you have the most relevant information to make informed trading decisions.</div>
                    </div>

                </div>
                <div className=' flex md:flex-row flex-col md:items-center md:space-x-10 md:mx-5 mx-2'>
                    <div className='border-2 px-3 py-4 rounded-2xl my-5 bg-[#FBEBEB] md:w-1/3'>
                        <span className='border-2 border-orange-500 font-bold px-3 rounded-md py-1'>
                            10
                        </span>
                        <div className='font-bold hero my-3'> Networking Opportunities</div>
                        <div className='pb-5'>Connect with a community of like-minded individuals who share your passion for cryptocurrencies. Collaborate, share ideas, and build relationships with fellow students and industry professionals, expanding your network within the crypto space.</div>
                    </div>
                    <div className='border-2 px-3 py-4 rounded-2xl my-5 bg-[#FBEBEB] md:w-1/3'>
                        <span className='border-2 border-orange-500 font-bold px-3 rounded-md py-1'>
                            11
                        </span>
                        <div className='font-bold hero my-3'> Pratical Trading Exercise</div>
                        <div className='pb-12'>Apply your knowledge in a risk-free environment with our practical trading exercises. Practice executing trades, analyze market scenarios, and fine-tune your strategies without the fear of losing real money.</div>
                    </div>
                    <div className='border-2 px-3 py-4 rounded-2xl my-5 bg-[#FBEBEB] md:w-1/3'>
                        <span className='border-2 border-orange-500 font-bold px-3 rounded-md py-1'>
                            12
                        </span>
                        <div className='font-bold hero my-3'> Portfolio Diversification Strategies</div>
                        <div className='pb-12'>Learn how to diversify your cryptocurrency portfolio effectively. Discover different asset classes, investment strategies, and portfolio allocation techniques to minimize risk and optimize returns..</div>
                    </div>

                </div>
                <div className="items-center flex justify-center"> <div className='border-2 px-3 py-4 rounded-2xl my-5 bg-[#FBEBEB] md:w-1/3'>
                    <span className='border-2 border-orange-500 font-bold px-3 rounded-md py-1'>
                        13
                    </span>
                    <div className='font-bold hero my-3'> Live Q&A Sessions</div>
                    <div className='pb-5'>Engage in live question-and-answer sessions with our instructors, where you can seek clarification on complex topics, get personalized advice, and address any challenges you may be facing. Benefit from their vast knowledge and experience in the cryptocurrency market.</div>
                </div></div>
            </div>
            <div className="md:my-16 my-5">

                <p className='mt-3 items-center flex justify-center text-center '><button className="rounded-full px-8 py-5 items-center tex-sm font-bold  text-white bg-[#D8383A]">Enroll now!</button></p>
            </div>
        </div>
        <div className=" bg-[#D8383A]  py-10">
            <div className="flex md:flex-row flex-col justify-center md:py-10 pt-24 md:px-0 px-5 text-white md:space-x-10">
                <div className=" text-white"> <p className='text-4xl font-bold leading-relaxed'>
                    Your Wealth <br /> Creation Story <br /> Awaits You!
                </p>
                    <p className='mt-5 md:flex hidden'><button className="rounded-full px-5 py-2 tex-sm font-bold  bg-white text-black">Enroll now!</button></p></div>
                <div className="md:m-0 mx-0">


                    <ul className="custom-list font-light mt-6 ml-0 ">
                        <p className='my-10 font-bold'>Program details</p>
                        <li className='my-5'>DABA Head Ofiice, Lekki Lagos </li>
                        <li className='my-5'>Friday, August 11 2023 </li>
                        <li className='my-5'>Monday, August 14 2023 </li>
                    </ul>
                </div>

            </div>
            <p className='mt-3 pb-24 mx-5 md:hidden flex text-center'><button className="rounded-full px-5 py-4 tex-sm font-bold  bg-white text-black">Get Started</button></p>
        </div>

        <div className="bg-[#5741DB] text-white py-10 items-center  justify-center" id="scroll-container">
            <div className="items-center text-center ">
                <p className="">Best Value. One Time Payment</p>
                <p className="text-2xl py-5"><span className="font-bold text-5xl">₦170,000</span> <span className="text-gray-200 px-5">~$200</span> </p></div>
            <div className="flex items-center justify-center md:text-center">
                <div className="flex md:flex-row flex-col">
                    <div className='md:pr-24 md:border-r-2 border-gray-400 '>
                        <p className="text-gray-400 py-5">DIRECT BANK TRANSFER</p>
                        <p className=" py-2">Bank: First Bank Nigeria</p>
                        <p className=" py-2">Account name: Digital Abundance</p>
                        <p className="whitespace-nowrap flex items-center py-2">Account number: 2033448026<span className="pl-3">
                            <Copy text="2033448026" /> </span> </p>
                    </div>

                    <div className=" md:px-3">
                        <p className="text-gray-400 py-5">USDT PAYMENT</p>
                        <p className=" py-2">Wallet address</p>

                        <p className="whitespace-nowrap flex items-center py-2">TKSXg5fTjnDhT5H6a3Q8kTL4735esBuL9R<span className="pl-1">
                            <Copy text="TKSXg5fTjnDhT5H6a3Q8kTL4735esBuL9R" /> </span> </p>
                        <p className="py-2">Network type: TRC20</p>
                    </div>
                </div>
            </div>
            <div className="items-center text-center my-5 md:my-16">
                <p className="">Send proof of all payment to Ruth</p>
                <p className='mt-3 pb-24 mx-auto justify-center items-center flex text-center'>
                    <Link href="https://api.whatsapp.com/send?phone=2348094703225&text=Hello%20Ruth">
                    <button className="rounded-full px-5 py-3 tex-sm font-bold flex items-center whitespace-nowrap space-x-2  text-white bg-[#07A16A]">
                        <span className="">
                            <Image  src={message} alt="chat Ruth" width={50} height={30} className="w-6 h-6"/>
                        </span>
                        <span>
                   Chat Ruth on Whatsapp</span></button>
                    </Link>
                    </p>  
            </div>
        </div>
        {/* <div>
      <h1>Click and Copy Example</h1>
      <Copy text="Text to be copied!" />
    </div> */}
    </>);
}

export default Hero;