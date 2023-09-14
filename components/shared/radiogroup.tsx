  import * as RadioGroup from '@radix-ui/react-radio-group';
  import React from "react";
  
  export default function Select ({
   }: {
   }) {
    return (
      <form>
        <RadioGroup.Root className="RadioGroupRoot" defaultValue="default" aria-label="View density">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <RadioGroup.Item className="RadioGroupItem" value="default" id="r1">
            <RadioGroup.Indicator className="RadioGroupIndicator" />
          </RadioGroup.Item>
          <label className="Label" htmlFor="r1">
            Light
          </label>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <RadioGroup.Item className="RadioGroupItem" value="comfortable" id="r2">
            <RadioGroup.Indicator className="RadioGroupIndicator" />
          </RadioGroup.Item>
          <label className="Label" htmlFor="r2">
            Medium
          </label>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <RadioGroup.Item className="RadioGroupItem" value="compact" id="r3">
            <RadioGroup.Indicator className="RadioGroupIndicator" />
          </RadioGroup.Item>
          <label className="Label" htmlFor="r3">
            Heavy
          </label>
        </div>
      </RadioGroup.Root>
     </form>
    );
  }