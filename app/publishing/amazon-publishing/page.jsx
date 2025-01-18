import ContactBanner from '@/app/Components/ContactBanner'
import DiscountForm from '@/app/Components/DiscountForm'
import Footer from '@/app/Components/Footer'
import Nav from '@/app/Components/Nav'
import Testimonials from '@/app/Components/Testimonials'
import VideoTestimonials from '@/app/Components/VideoTestimonials'
import React from 'react'

const page = () => {
  return (
    <>
        <Nav/>
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
          <h1 className="text-white text-4xl md:text-5xl font-bold">Maximize The Exposure Of Your Book Through Our Amazon Book Publishing Services
          </h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-[90%] mx-auto py-12 gap-8">
      <div className="md:w-[65%] w-full space-y-8">
        <p className="text-gray-500 text-justify text-sm">
        Expanding the exposure of books is the goal of every author and many online reading platforms play a key role in achieving this goal. Amazon has made its name known among all online platforms as a strong player in this field with their easy and convenient services to empower aspiring authors and writers. Amazon has already crossed various geographical boundaries through its worldwide approach.

</p>
        <p className="text-gray-500 text-justify mt-6 text-sm">
        Amazon is the most popular and used self-publishing platform in the U.S. according to a survey with 37.2 % votes ranking first. Coastal Ghostwriting with its collection of skilled wordsmiths aims to make this process much easier and accessible for writers. We will make all your worries and queries go away with our unparalleled services that only achieve excellence and nothing else. 

</p>

        {/* Section 1 */}
        <h1 className="text-3xl md:text-4xl text-sky-500 mt-12">Uncover The Full Potential Of Your Book With Our Amazon KDP Services
        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        Amazon publishing services provide numerous benefits to its users and it would be a shame to not leverage these services and get the help of Coastal Ghostwriting to unleash its full potential.

</p>

        <h1 className="text-2xl font-bold md:text-3xl mt-8">Royalties
        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        Royalties are one of the biggest advantages of Amazon that everyone is always talking about. Other publishing platforms allow royalty up to only 10% upon the sale of each book. Amazon book publishing royalties can go up to 70% depending on various variables making them the biggest online marketers.

</p>
        <h1 className="text-2xl font-bold md:text-3xl mt-8">Creativity
        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        Amazon leaves complete control over creativity to its users with no restrictions or constraints. You will be freely allowed to change the title, description, design, and audience of your book according to your preferences. Moreover, no matter what changes our editors make, you will have the final say.  

</p>
        <h1 className="text-2xl font-bold md:text-3xl mt-8">Audiobooks
        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        Audiobooks are another great option offered by Amazon publishing services . They provide the audible version of your books to reach out to book listeners and expand your audience base. This way with our help you can get all your book versions in the same place and focus on appealing to one audience. 

</p>
        <h1 className="text-2xl font-bold md:text-3xl mt-8">Preorders
        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        Preorders are another great option for Amazon available to all of their users. This way writers can also offer a print-on-demand option and only get those books printed that have been preordered. This is also a great marketing chance that will allow our specialists to prepare an effective marketing strategy. 

</p>
        <h1 className="text-2xl font-bold md:text-3xl mt-8">Tracking
        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        Preserve your family history and values for future Amazon allows you to track your sales whenever you want to make sure you are getting the accurate amount of earnings. We also offer 100% profits to our clients if you decide to publish your book through our services along with numerous other benefits.

with our legacy autobiography service. We collaborate with you to document ancestral stories, familial traditions, and cherished memories, ensuring that your legacy stays for years to come.
        </p>

        
        
        <h1 className="text-3xl text-sky-500 md:text-4xl mt-12">Get Our Amazon Kindle Publishing Support To Reach More Readers
        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        If you want to hire an Amazon publishing company , then you can consult us at Coastal Ghostwriting with your queries and get a free consultation quote. The support you can expect through our services are:

</p>


        <h1 className="text-2xl font-bold md:text-3xl mt-8">Book Cover Design
        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        Our team contains some skilled designers who are used to crafting unique eye-catching designs for their clients. We will create the most mesmerizing covers for your book that adequately convey the message to your readers.

</p>
        <h1 className="text-2xl font-bold md:text-3xl mt-8">Metadata Optimization
        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        Metadata optimization includes modifying the title of your book along with its description and keywords. This is done by our skilled wordsmith who fine-tunes all of this content to attract your targeted audience and enhance its presence.

</p>
        <h1 className="text-2xl font-bold md:text-3xl mt-8">Assistance With Formatting
        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        You can simply send the raw version of your manuscript and we will refine it into the most polished version. Our experts will handle these intricate details with extreme delicacy to maintain their readability and eloquence intact. 

</p>
        <h1 className="text-2xl font-bold md:text-3xl mt-8">Marketing And Promotion
        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        Marketing and promotion are other factors that you will need to perform by yourself. By getting help through our professionals, you can easily increase the visibility and reach of your book to a wider audience base. 

</p>
        <h1 className="text-2xl font-bold md:text-3xl mt-8">Global Distribution
        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        To assist you in the global distribution of your book we will print crips pages, sturdy book covers with vibrant aesthetics to make sure it is a work of art. Along with this, we will also take on the responsibility of providing digital and print versions of your story to your readers.

</p>

        <h1 className="text-3xl md:text-4xl text-sky-500 mt-12">Contact Our Amazon Kindle Publishers For Hire To Publish Masterpieces
        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        Coastal Ghostwriting has a skilled team of dedicated publishing and marketing specialists who promise to deliver exceptional results through their high-end products and solutions. We are the best Amazon publisher services that craft the most alluring design, informative metadata, and effective marketing strategies to maximize your book’s exposure. We aim to provide:

</p>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        Contact us now at Coastal Ghostwriting for a free quote and get all the services you want at reasonable prices with tailored packages specially designed to meet all your requirements.

</p>
</div>
<div className="md:w-[35%] w-full flex justify-center">
          <div className="w-full md:w-auto max-h-[500px] overflow-y-auto">
            <DiscountForm isOpen={true} />
          </div>
        </div>        

        </div>
      <ContactBanner/>
      <Testimonials/>
      
      <Footer/>
    </>
  )
}

export default page