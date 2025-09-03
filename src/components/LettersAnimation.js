import React from "react";
import Typewriter from "typewriter-effect";
import { useIsVisible } from "../App";

function LettersAnimation() {
  const [containerRef1, isVisible1] = useIsVisible({});

  return (
    <div
      className="flex flex-col justify-around items-center bg-transparent text-gray-900 dark:text-gray-100 h-screen"
      style={{ position: "relative", zIndex: 1 }}
    >
      <h2 className="text-4xl font-semibold relative text-center space-y-2">
        <Typewriter
          options={{ delay: 125, loop: false }}
          onInit={(typewriter) => {
            typewriter
              .typeString('Hello! I\'m <span class="font-bold">Manos</span>.')
              .start();
          }}
        />
      </h2>
      <div
        className={`${isVisible1 && "animate-drop-in"} opacity-0`}
        ref={containerRef1}
        style={{ "--delay": 3.2 + "s" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className={`size-6 ${isVisible1 && 'animate-bounce'}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      </div>
    </div>
  );
}

export default LettersAnimation;
