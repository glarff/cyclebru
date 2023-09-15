import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import { ComponentToPrint } from './ComponentToPrint';

export default function ResumeContainer ({
}: {

}) {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });
  

  return (
    <div>
        <div className = "bg-white relative z-40 h-100vh w-full text-stone-800 px-4 py-4 rounded-lg font-roboto">
            <button onClick={handlePrint}>Print</button>
            <ComponentToPrint ref={componentRef} />
        </div>  
    </div>
  );
};