import React from 'react'
import Typewriter from 'typewriter-effect';


function LettersAnimation() {
  return (
    <div className="flex justify-center items-center bg-transparent text-gray-900 dark:text-gray-100 h-screen" style={{ position: 'relative', zIndex: 1 }}>
      <h2 className="bottom-48 text-4xl font-semibold relative text-center space-y-2"><Typewriter
                options={{delay: 125, loop: false}}
                onInit={(typewriter) => {
                  typewriter.typeString('Hello! I\'m <span class="font-bold">Manos</span>.')
                  .start()
                }}
              />
      </h2>
    </div>
  )
}

export default LettersAnimation