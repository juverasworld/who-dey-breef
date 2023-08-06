import { useState } from 'react';
import Image from "next/image"
import Link from "next/link"
import pop from "../public/pop.png"
import { AiOutlineClose } from 'react-icons/ai';

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={`popup ${showPopup ? 'active' : ''}`}>
      <div className="content flex lg:flex-row flex-col md:max-w-[60%] ">
        <div className="">

        <p className="font-bold text-4xl">Unlock The Secrets Of <br className="lg:flex hidden" />Wealthy Trading in 5 Days! </p>
        <p>Trade your way out of recession with this one-of-a-kind <br className="md:flex hidden" /> opportunity to immerse yourself in the world of physical <br className="md:flex hidden" /> trading and gain invaluable knowledge from industry<br className="md:flex hidden" /> experts.</p>
        <p >
            <Link href="/master-class">
            <button className="rounded-full px-5 py-2 tex-sm font-bold  text-white bg-[#D8383A] ">Learn More!</button>
            </Link>
            </p>
        </div>
        <div className="">
            <Image src={pop} alt='sign up' width={400} height={300} className="  md:w-full h-auto "/>
        </div>
        <button className="cancel-btn text-black" onClick={handleClosePopup}>
          <AiOutlineClose />
        </button>
      </div>
    </div>
  );
};

export default Popup;
