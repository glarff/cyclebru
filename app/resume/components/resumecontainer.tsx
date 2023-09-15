import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import { ComponentToPrint } from './ComponentToPrint';
import { Printer } from "lucide-react"

export default function ResumeContainer ({
}: {

}) {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });
  

  return (
    <div>
        <div className = "bg-white relative z-40 h-100vh w-full text-stone-800 px-4 py-4 rounded-lg font-roboto max-w-xl md:max-w-5xl">
          <button
                className="md:flex font-lato z-10 px-4 py-4 text-md text-blue-400 transition-colors hover:bg-white hover:text-black"
                onClick={handlePrint}
          >
              <Printer />
              <div className="px-1">Print</div>
          </button>
          <ComponentToPrint ref={componentRef} />
        </div>  
    </div>
  );
};