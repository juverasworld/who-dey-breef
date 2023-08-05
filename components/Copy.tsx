import React, { useState } from 'react';
import Image from "next/image"
import copy from "../public/copy.png"
interface CopyProps {
  text: string;
}

const Copy: React.FC<CopyProps> = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset copied message after 2 seconds
  };

  return (
    <div>
      <button className='flex items-center whitespace-nowrap px-4 py-[5px] bg-white text-black rounded-3xl' onClick={handleCopy}><span>
        <Image src={copy} width={50} height={30} alt="copy" className="h-5 w-5"       
            />
        </span> <span className="text-sm">Copy</span></button>
      {isCopied && <div className="notification">Text copied to clipboard!</div>}
    </div>
  );
};

export default Copy;
