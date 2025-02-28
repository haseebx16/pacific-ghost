import React from 'react'

const Draft = () => {
  return (
    <div className='flex justify-center items-center w-full p-8 bg-zinc-900'>
        <div className='w-full flex justify-between items-center'>
            <div>
                <h1 className='text-white text-5xl max-w-xl font-extrabold'>Have a draft and are looking
                to get it published?</h1>
            </div>
            <div className='flex flex-row space-x-4'>

            <button
                className="inline-block bg-yellow-400 hover:bg-white text-black hover:text-black border-2 border-black px-6 py-2 text-base font-medium transition-colors duration-200"
                >
                Activate Your Coupon
                </button>
                <button
                className="inline-block bg-transparent hover:bg-white text-white hover:text-black border-2 border-white px-6 py-2 text-base font-medium transition-colors duration-200"
                >
                Live Chat
                </button>
            </div>
        </div>
    </div>
  )
}

export default Draft