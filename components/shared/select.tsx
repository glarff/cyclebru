import {
    CheckIcon,
    ChevronDownIcon,
    ChevronUpIcon,
  } from "@radix-ui/react-icons";
  import * as SelectPrimitive from "@radix-ui/react-select";
  import { clsx } from "clsx";
  import React from "react";
  import Button from "./button"

  
  type SelectProps = {};
  
  export default function Select ({
    props,
   }: {
    props: SelectProps
   }) {
    return (
      <SelectPrimitive.Root defaultValue="sweet spot intervals">
        <SelectPrimitive.Trigger asChild aria-label="Workout">
          <button
            className={clsx(
              "inline-flex select-none items-center justify-center rounded-md px-4 py-2 text-sm font-medium",
              "bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-900",
              "hover:bg-gray-50",
              "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
              // Register all radix states
              "group",
              "radix-state-open:bg-gray-50 dark:radix-state-open:bg-gray-900",
              "radix-state-on:bg-gray-50 dark:radix-state-on:bg-gray-900",
              "radix-state-instant-open:bg-gray-50 radix-state-delayed-open:bg-gray-50"
            )}
          >
            <SelectPrimitive.Value />
            <SelectPrimitive.Icon className="ml-2">
              <ChevronDownIcon />
            </SelectPrimitive.Icon>
          </button>
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Content>
          <SelectPrimitive.ScrollUpButton className="flex items-center justify-center text-gray-700 dark:text-gray-300">
            <ChevronUpIcon />
          </SelectPrimitive.ScrollUpButton>
          <SelectPrimitive.Viewport className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg">
            <SelectPrimitive.Group>
              {["20/40",
                "ONE MINUTE INTERVALS",
                "PYRAMID INTERVALS ONE",
                "PYRAMID INTERVALS TWO",
                "RAMPED INTERVALS",
                "SPIN-OUT SESSION",
                "20 MINUTE WARM-UP",
                "UNDER/OVER",
                "UNDER/OVER WITH SURGES",
                "LEG SPEED",
                "TWO X 20",
                "BIG GEAR LOW CADENCE",
                "GEARED SPRINT",
                "INTENSITY SLIDE",
                "RUSSIAN STEPS",
                "SWEET SPOT INTERVALS",
                "3X10 MINUTES",
                "TEMPO INTERVALS",
                "VO2 INTERVALS",
                "ZONE BUILD"].map(
                (f, i) => (
                  <SelectPrimitive.Item
                    key={`${f}-${i}`}
                    value={f.toLowerCase()}
                    className={clsx(
                      "relative flex items-center px-8 py-2 rounded-md text-sm text-gray-700 dark:text-gray-300 font-medium focus:bg-gray-100 dark:focus:bg-gray-900",
                      "radix-disabled:opacity-50",
                      "focus:outline-none select-none"
                    )}
                  >
                    <SelectPrimitive.ItemText>{f}</SelectPrimitive.ItemText>
                    <SelectPrimitive.ItemIndicator className="absolute left-2 inline-flex items-center">
                      <CheckIcon />
                    </SelectPrimitive.ItemIndicator>
                  </SelectPrimitive.Item>
                )
              )}
            </SelectPrimitive.Group>
          </SelectPrimitive.Viewport>
          <SelectPrimitive.ScrollDownButton className="flex items-center justify-center text-gray-700 dark:text-gray-300">
            <ChevronDownIcon />
          </SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
      </SelectPrimitive.Root>
    );
  }