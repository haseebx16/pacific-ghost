import React from 'react'

const Services = () => {
  return (
    <div>
        <section className={`p-20 px-16 flex flex-col text-black justify-center items-center bg-background`}>
                    <div>
                    <h1 className=' md:text-4xl text-3xl font-bold text-black text-center'>Our Services</h1>
                    <p className='text-gray-700 mt-4 max-w-md'>We have a myriad of services that we offer to our clients.
                    Take a look down below to see what we can do for you!</p>    
                    </div>
                    <div className='grid mt-8 grid-cols-1 md:grid-cols-4 gap-4'>
                        <div className='bg-white hover:bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-400 hover:text-white duration-700 flex flex-col   border  '>
                            <div className='flex justify-end items-end'>
                                <h1 className='font-extrabold text-5xl text-background'>01</h1>
                            </div>
                            <div className='flex flex-col justify-center items-center p-12'>
                                <div className='flex justify-center space-x-2 items-center'>
                                    <img src='ghost-1.png'/>
                                    <h2 className='text-xl font-bold'>Ghostwriting</h2>
                                </div>
                                <p className=' text-left text-sm mt-3'>Our team of writers are professional and versatile.</p>
                            </div>
                        </div>
                        <div className='bg-white hover:bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-400 hover:text-white duration-700  flex flex-col   border  '>
                            <div className='flex justify-end items-end'>
                                <h1 className='font-extrabold text-5xl text-background'>02</h1>
                            </div>
                            <div className='flex flex-col justify-center items-center p-12'>
                                <div className='flex justify-center space-x-2 items-center'>
                                    <img src='ghost-1.png'/>
                                    <h2 className='text-xl font-bold'>Cover Design</h2>
                                </div>
                                <p className=' text-left text-sm mt-3'>An eye-catching cover design for your immersive book.</p>
                            </div>
                        </div>
                        <div className='bg-white hover:bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-400 hover:text-white duration-700  flex flex-col   border  '>
                            <div className='flex justify-end items-end'>
                                <h1 className='font-extrabold text-5xl text-background'>03</h1>
                            </div>
                            <div className='flex flex-col justify-center items-center p-12'>
                                <div className='flex justify-center space-x-2 items-center'>
                                    <img src='ghost-1.png'/>
                                    <h2 className='text-xl font-bold'>Audio Book</h2>
                                </div>
                                <p className=' text-left text-sm mt-3'>Avail the services of our talented readers for your audio book.</p>
                            </div>
                        </div>
                        <div className='bg-white hover:bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-400 hover:text-white duration-700  flex flex-col   border  '>
                            <div className='flex justify-end items-end'>
                                <h1 className='font-extrabold text-5xl text-background'>04</h1>
                            </div>
                            <div className='flex flex-col justify-center items-center p-12'>
                                <div className='flex justify-center space-x-2 items-center'>
                                    <img src='ghost-1.png'/>
                                    <h2 className='text-xl font-bold'>Book Trailer</h2>
                                </div>
                                <p className=' text-left text-sm mt-3'>We’ll help market your book with an impressive book trailer.</p>
                            </div>
                        </div>
                        <div className='bg-white hover:bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-400 hover:text-white duration-700  flex flex-col   border  '>
                            <div className='flex justify-end items-end'>
                                <h1 className='font-extrabold text-5xl text-background'>05</h1>
                            </div>
                            <div className='flex flex-col justify-center items-center p-12'>
                                <div className='flex justify-center space-x-2 items-center'>
                                    <img src='ghost-1.png'/>
                                    <h2 className='text-xl font-bold'>Author Website</h2>
                                </div>
                                <p className=' text-left text-sm mt-3'>Get your own website developed for all your books.</p>
                            </div>
                        </div>
                        <div className='bg-white hover:bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-400 hover:text-white duration-700  flex flex-col   border  '>
                            <div className='flex justify-end items-end'>
                                <h1 className='font-extrabold text-5xl text-background'>06</h1>
                            </div>
                            <div className='flex flex-col justify-center items-center p-12'>
                                <div className='flex justify-center space-x-2 items-center'>
                                    <img src='ghost-1.png'/>
                                    <h2 className='text-xl font-bold'>Publishing</h2>
                                </div>
                                <p className=' text-left text-sm mt-3'>Get your finished book published and flip the pages in real life.</p>
                            </div>
                        </div>
                        <div className='bg-white hover:bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-400 hover:text-white duration-700  flex flex-col   border  '>
                            <div className='flex justify-end items-end'>
                                <h1 className='font-extrabold text-5xl text-background'>07</h1>
                            </div>
                            <div className='flex flex-col justify-center items-center p-12'>
                                <div className='flex justify-center space-x-2 items-center'>
                                    <img src='ghost-1.png'/>
                                    <h2 className='text-xl font-bold'>Marketing</h2>
                                </div>
                                <p className=' text-left text-sm mt-3'>For maximum reach, we’ll effectively market your book.</p>
                            </div>
                        </div>
                        <div className='bg-white hover:bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-400 hover:text-white duration-700  flex flex-col   border  '>
                            <div className='flex justify-end items-end'>
                                <h1 className='font-extrabold text-5xl text-background'>08</h1>
                            </div>
                            <div className='flex flex-col justify-center items-center p-12'>
                                <div className='flex justify-center space-x-2 items-center'>
                                    <img src='ghost-1.png'/>
                                    <h2 className='text-xl font-bold'>Proofreading & Formatting</h2>
                                </div>
                                <p className=' text-left text-sm mt-3'>The finishing touches of your complete book.</p>
                            </div>
                        </div>
                        
                       

                    </div>
                    <div className='mt-6 space-x-4'>
                        <button className='bg-yellow-400 hover:bg-white text-black hover:text-black border-2 border-black px-6 py-2 text-base font-medium transition-colors duration-200'>
                            Activate Your Coupon
                        </button>
                        <button className='bg-transparent hover:bg-white text-black hover:text-black border-2 border-black px-6 py-2 text-base font-medium transition-colors duration-200'>
                            Live Chat
                        </button>
                    </div>

                    
                </section>
    </div>
  )
}

export default Services