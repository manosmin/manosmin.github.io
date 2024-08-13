import React from 'react'

function LettersAnimation() {
  return (
    <div className="flex justify-center items-center bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 h-screen">
      <h2 className="bottom-48 text-4xl font-semibold relative w-[max-content] before:absolute before:inset-0 before:animate-typewriter before:bg-gray-100 dark:before:bg-gray-900 after:absolute after:inset-0 after:w-[0.175em] after:animate-caret after:bg-gray-900 dark:after:bg-gray-100">Hello!&nbsp;
        <p className="inline-block">I'm <span className='font-bold'>Manos</span>.</p>
      </h2>
    </div>
  )
}

export default LettersAnimation