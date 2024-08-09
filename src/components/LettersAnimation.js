import React from 'react'

function LettersAnimation() {
  return (
    <div className="flex justify-center items-center bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-gray-200 p-10 h-screen">
      <h1 class="text-4xl font-semibold relative w-[max-content] before:absolute before:inset-0 before:animate-typewriter before:bg-gray-200 after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-gray-900 dark:after:bg-gray-200">Hello!&nbsp;<p class="inline-block">I'm <span className='font-bold'>Manos</span>.</p>
      </h1>
    </div>
  )
}

export default LettersAnimation