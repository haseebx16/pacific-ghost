import ContactBanner from '@/app/Components/ContactBanner'
import DiscountForm from '@/app/Components/DiscountForm'
import Footer from '@/app/Components/Footer'
import Nav from '@/app/Components/Nav'
import Testimonials from '@/app/Components/Testimonials'
import React from 'react'

const Page = () => {
  return (
    <>
      <Nav />
      <div className="relative">
        {/* Background Image */}
        <img
          src="/About-01.jpg"
          alt="About Background"
          className="w-full z-1 h-[400px] object-cover"
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Heading Overlay */}
        <div className="absolute inset-0 flex items-center md:justify-start justify-center md:px-12">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Get Your Hands On The Best Memoir Writing Services In Town
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row md:justify-between w-[90%] mx-auto py-12">
        {/* Left Side Content */}
        <div className="md:w-[60%] w-full px-4">
          <p className="text-gray-500 text-justify text-sm">
            Want to give words to life events, beautiful memories, and unforgettable times and preserve it forever.
            We have top personal memoir ghostwriters all set to use their unmatched skills and write you a memoir.
            Whether you are a celebrity, politician, athlete, musician, or an academic student finding writing a
            memoir difficult, then we have you covered.
          </p>
          <p className="text-gray-500 text-justify mt-6 text-sm">
            Our professional memoir writers are as excited as you must be to give shape to your memories. Coastal
            Ghostwriting is a renowned ghostwriting company that has been serving global clients for years.
          </p>
          <p className="text-gray-500 text-justify mt-6 text-sm">
            We agree with this famous quote out of the best-selling memoir, Becoming by Michelle Obama. So, why not
            own your life stories and let the world know your struggles, the crooked path you took that led to success?
            Modern-day readers are interested in a fresh perspective to view life.
          </p>
          <h1 className="text-3xl md:text-4xl text-sky-500 mt-12">
            How We Write Your Memoir- Your Success, Our Vision
          </h1>
          <p className="text-gray-500 text-justify mt-2 text-sm">
            We will give your life stories a creative and fresh perspective allowing readers to be inspired and learn
            something valuable by the time they have read the last page. That’s done by adding these aspects to the
            memoir.
          </p>
          <h1 className="text-2xl font-bold text-sky-500 md:text-3xl mt-8">Authentic Voice</h1>
          <p className="text-gray-500 text-justify mt-2 text-sm">
            A compelling memoir often reflects the author’s authentic voice, we allow readers to connect with the
            narrator on a personal level with our persuasive writing expertise. The voice feels genuine to the author’s
            personality and experiences making readers completely delve into it.
          </p>
          <h1 className="text-2xl font-bold text-sky-500 md:text-3xl mt-8">Your Life Story, Our Craft</h1>
          <p className="text-gray-500 text-justify mt-2 text-sm">
            Your story is unique, and our writers treat it as a masterpiece. We carefully tailor the narrative to
            reflect your life experiences, crafting a memoir that resonates deeply with readers and captures your
            essence.
          </p>
          <h1 className="text-2xl font-bold text-sky-500 md:text-3xl mt-8">Comprehensive Research</h1>
          <p className="text-gray-500 text-justify mt-2 text-sm">
            To ensure accuracy and authenticity, we conduct in-depth research and interviews, diving into the intricate
            details of your life to create a narrative that is both factual and engaging.
          </p>
          <h1 className="text-2xl font-bold text-sky-500 md:text-3xl mt-8">Captivating Narration</h1>
          <p className="text-gray-500 text-justify mt-2 text-sm">
            Our storytelling expertise ensures that your memoir is not just a series of events but a captivating journey
            that keeps readers hooked from the first page to the last.
          </p>
        </div>

        {/* Right Side Form */}
        <div className="md:w-[35%] w-full mt-8 md:mt-0">
          <DiscountForm isOpen={true} />
        </div>
      </div>

      <ContactBanner />
      <Testimonials />
      <Footer />
    </>
  )
}

export default Page
