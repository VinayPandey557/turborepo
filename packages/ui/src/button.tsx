"use client";

import { ReactNode } from "react";

interface ButtonProps {
 
}

export const Button = () => {
  return (
    <button
      onClick={() => alert( `Hello from your`)}
    >
    Hi from button
    </button>
  );
};
