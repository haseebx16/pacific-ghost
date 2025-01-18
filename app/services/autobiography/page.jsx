import ContactBanner from '@/app/Components/ContactBanner'
import DiscountForm from '@/app/Components/DiscountForm'
import Footer from '@/app/Components/Footer'
import Nav from '@/app/Components/Nav'
import Testimonials from '@/app/Components/Testimonials'
import VideoTestimonials from '@/app/Components/VideoTestimonials'
import React from 'react'

const Page = () => {
  return (
    <>
      <Nav />
      {/* Hero Section */}
      <div className="relative">
        {/* Background Image */}
        <img
          src="/About-01.jpg"
          alt="About Background"
          className="w-full h-[400px] object-cover z-1"
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Heading Overlay */}
        <div className="absolute inset-0 flex items-center justify-center md:justify-start md:px-12">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center md:text-left">
            Professional Autobiography Writers for Hire
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row w-[90%] mx-auto py-12 gap-8">
        {/* Left Content */}
        <div className="md:w-[65%] w-full space-y-8">
          <p className="text-gray-500 text-justify text-sm">
            Nowadays, personal stories hold more power than any fictional tale. And an autobiography is the perfect format to accomplish this. Whether you’re sharing life’s journey, professional growth, or achievement over hardship, an autobiography allows you to share your experiences while captivating audiences.
          </p>
          <p className="text-gray-500 text-justify text-sm">
            At Coastal Ghostwriting, we bring professional biography writers who write the autobiography for you. We have a team of talented autobiography ghostwriters who listen to your experiences and turn them into engaging narratives that people love to read.
          </p>
          <p className="text-gray-500 text-justify text-sm">
            If you want your book to shine in the spotlight, hiring a professional autobiography writer from Coastal Ghostwriting is the way to go.
          </p>

          {/* Section 1 */}
          <h2 className="text-3xl md:text-4xl text-sky-500">
            Coastal Ghostwriting – Your Destination For Best Autobiography Writing Services
          </h2>
          <p className="text-gray-500 text-justify text-sm">
            You are highly welcome at Coastal Ghostwriting, which is best to provide biography writing services. Our team of qualified writers specializes in creating excellent autobiographies. With years of experience in professional autobiography ghostwriting, we have even a proven track record worldwide.
          </p>
          <p className="text-gray-500 text-justify text-sm">
            At Coastal Ghostwriting, every story is discussed in a unique tone. Even if you are a business leader, a public figure, or someone with a remarkable journey to tell, we are dedicated to turning your memories into a literary masterpiece. Our personalized approach confirms that your voice shines through every page, creating a narrative that readers want.
          </p>

          {/* Section 2 */}
          <h2 className="text-3xl md:text-4xl text-sky-500">
            Adding Value to Your Story With Our Professional Autobiography Ghostwriting Service
          </h2>
          <p className="text-gray-500 text-justify text-sm">
            You can surely rely on the best biography ghostwriters available at Coastal Ghostwriting. We discuss your life experiences into a polished masterpiece.
          </p>
          <p className="text-gray-500 text-justify text-sm">
            With expert storytelling and careful attention to detail, we enrich your narrative to deeply connect with readers. Allow us to take your autobiography to the next level, capturing the spirit of your experiences and leaving a lasting impact on your audience.
          </p>

          {/* Section 3 */}
          <h2 className="text-3xl md:text-4xl text-sky-500">
            Bring Your Life Story On Pages With Our Professional Biography Writing Services
          </h2>
          <p className="text-gray-500 text-justify text-sm">
            Your story deserves to be heard; don’t you agree? Have you ever accomplished something in your profession that seemed nearly impossible? How many life-changing visions have you gained from your own experiences? If you can answer these all, you have the power to share your life narrative in a way that keeps readers glued to the pages until the very end.
          </p>
          <p className="text-gray-500 text-justify text-sm">
            But what if you lack the writing skills to do so? Coastal Ghostwriting has the solution. At Coastal Ghostwriting, we specialize in crafting compelling biographies that authentically capture the essence of your experiences.
          </p>

          {/* Section 4 */}
          <h2 className="text-3xl md:text-4xl text-sky-500">
            Explore The Various Types Of Autobiographies to Choose From
          </h2>
          <p className="text-gray-500 text-justify text-sm">
            At Coastal Ghostwriting, we offer a diverse range of autobiography writing services personalized to your unique needs and preferences. Our team lets you choose the desired format and style you want for your autobiography.
          </p>

          {/* Autobiography Types */}
          <h3 className="text-2xl font-bold text-sky-500">Traditional Autobiography</h3>
          <p className="text-gray-500 text-justify text-sm">
            Our traditional autobiography service includes a comprehensive exploration of your entire life journey, from childhood memories to present-day experiences. We then create a narrative that sums up the depth of your story, highlighting key moments and insights along the way.
          </p>
          <h3 className="text-2xl font-bold text-sky-500">Memoir Writing</h3>
          <p className="text-gray-500 text-justify text-sm">
            If you prefer to focus on specific periods, themes, or events in your life, our memoir writing service is perfect for you. We work closely with you to identify the most significant chapters of your life and write a compelling narrative.
          </p>
          <h3 className="text-2xl font-bold text-sky-500">Celebrity Autobiography</h3>
          <p className="text-gray-500 text-justify text-sm">
            Our team focuses on capturing the unique voices and experiences of celebrities and public figures. Whether you’re a famous entertainer, athlete, or politician, we offer professional ghostwriting services to help bring your story to life.
          </p>
          <h3 className="text-2xl font-bold text-sky-500">Corporate Autobiography</h3>
          <p className="text-gray-500 text-justify text-sm">
            For business leaders and entrepreneurs, we provide corporate autobiography writing services that showcase your professional journey, accomplishments, and vision. We understand the importance of highlighting your achievements while conveying your leadership philosophy.
          </p>
          <h3 className="text-2xl font-bold text-sky-500">Legacy Autobiography</h3>
          <p className="text-gray-500 text-justify text-sm">
            Preserve your family history and values for future generations with our legacy autobiography service. We collaborate with you to document ancestral stories, familial traditions, and cherished memories, ensuring that your legacy stays for years to come.
          </p>
        </div>

        {/* Right Content: Discount Form */}
        <div className="md:w-[35%] w-full flex justify-center">
          <div className="w-full md:w-auto max-h-[500px] overflow-y-auto">
            <DiscountForm isOpen={true} />
          </div>
        </div>
      </div>

      {/* Contact, Testimonials, and Footer */}
      <ContactBanner />
      <Testimonials />
      <VideoTestimonials />
      <Footer />
    </>
  )
}

export default Page
