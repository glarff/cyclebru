import React from "react"
import { InputProps } from "rsuite";
import Resume from "./resume";

export const ComponentToPrint = React.forwardRef<HTMLInputElement, InputProps>(
    (props, ref) => {
    return (
      <div ref={ref}><Resume /></div>
    );
  });