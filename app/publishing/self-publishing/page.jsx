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
          <h1 className="text-white text-4xl md:text-5xl font-bold">Best Self-Publishing Company In Town
          </h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-[90%] mx-auto py-12 gap-8">
      <div className="md:w-[65%] w-full space-y-8">
        <p className="text-gray-500 text-justify text-sm">
        The world of self-publishing is a maze. Authors feel perplexed and as a result, they fall into loopholes of the ending complexities. So, here is when our experts in the field comes in handy. We have a bunch of professionals all geared up to offer you the best self-publishing services.

</p>
        <p className="text-gray-500 text-justify mt-6 text-sm">
        Coastal Ghostwriting has been assisting authors for years and has been listed among the top ghostwriting services. So, trust our professionals and wait for your book’s success. Explore our page for what else we have to offer.

</p>
      



        {/* Section 1 */}
        <h1 className="text-3xl md:text-4xl text-sky-500 mt-12">Why Authors Choose Self-Publishing Book Services
        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        There are solid reasons to go for self-publishing. We promise your book will take the lead on all the leading digital e-reading platforms.

</p>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        &#x2022;&nbsp;Creative Control: Self-publishing allows authors to maintain complete creative control over their work, from writing and editing to cover design and formatting. They can bring their vision to life without interference from traditional publishing gatekeepers.
        </p>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        &#x2022;&nbsp;Speed to Market: Traditional publishing can be a lengthy process, involving querying agents, and securing a publishing deal. Self-publishing enables authors to get their books to market much faster, often within weeks or months, allowing them to capitalize on timely topics or trends.
        </p>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        &#x2022;&nbsp;Higher Royalties: Self-published authors typically earn higher royalty rates compared to traditional publishing contracts. Instead of sharing profits with a publisher, they keep a larger percentage of the revenue generated from book sales, maximizing their earning potential.
        </p>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        &#x2022;&nbsp;Global Distribution: Through platforms like Amazon Kindle Direct Publishing (KDP) Smashwords, and IngramSpark, self-published authors can distribute their books worldwide in digital and print formats. This global reach allows them to connect with readers across the globe without the limitations of traditional publishing distribution networks.
        </p>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        &#x2022;&nbsp;Flexibility: Self-publishing allows authors the flexibility to experiment with different pricing strategies, promotional tactics, and publishing formats. They can adapt to market feedback and make adjustments to their books or marketing approach in real time, optimizing their chances of success.
        </p>
        
        <h1 className="text-3xl md:text-4xl text-sky-500 mt-12">We are Ranked Among The Best Self-Publishing Companies Worldwide
        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        Coastal Ghostwriting is ranked among the top best self-publishing companies globally. Our competent publishers have years of expertise in publishing books for renowned authors. We have our hands in those best-selling book publishing books you read online.

</p>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        As an indie author or someone with no or little experience in the self-publishing domain, Coastal Ghostwriting is there to assist you.

</p>
        
        <h1 className="text-3xl md:text-4xl text-sky-500 mt-12">Hire Self-Publishing Ghostwriters To Avoid These Mistakes
        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        By avoiding these common mistakes and approaching self-publishing with diligence and professionalism, you can increase your chances of success and achieve your publishing goals. A self-publishing service is all about helping authors get away from these

</p>

        <h1 className="text-2xl font-bold md:text-3xl mt-8">Skipping Editing and Proofreading
        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        One of the biggest mistakes self-publishers make is not investing in professional editing and proofreading services. A polished manuscript is crucial for credibility and reader satisfaction.

</p>
        <h1 className="text-2xl font-bold md:text-3xl mt-8">Poor Cover Design
        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        Your book cover is the first thing readers see, so don’t even think about compromising design quality. Investing in our professional cover designers will value your book’s genre and content.

</p>
        <h1 className="text-2xl font-bold md:text-3xl mt-8">Ignoring Marketing and Promotion
        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        Simply uploading your book to a publishing platform won’t guarantee sales. Our effective marketing and promotion strategies are essential for reaching your target audience and generating buzz around your book.

</p>
        <h1 className="text-2xl font-bold md:text-3xl mt-8">Underpricing or Overpricing
        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        Pricing your book too low may devalue your work while pricing it too high could deter potential buyers. That is why our researchers compare titles in your genre and set a competitive yet fair price.

</p>
        <h1 className="text-2xl font-bold md:text-3xl mt-8">Failing to Build an Author Platform

        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        Building a strong author platform takes time and effort, but it’s essential for long-term success. We will engage with your audience through social media, the author’s website, and your email list to cultivate a loyal fan base.


</p>
        <h1 className="text-2xl font-bold md:text-3xl mt-8">Neglecting Metadata Optimization
        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        Metadata, including keywords, categories, and descriptions, plays a crucial role in making your book discoverable online. Take the time to optimize your metadata for maximum visibility.

</p>
        <h1 className="text-2xl font-bold md:text-3xl mt-8">Ignoring Formatting Guidelines

        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        Improper formatting can make your book appear unprofessional and difficult to read. We follow formatting guidelines provided by your chosen publishing platform to ensure compatibility across devices.

</p>
        <h1 className="text-2xl font-bold md:text-3xl mt-8">Not Obtaining Rights and Permissions

        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        If your pre-written book includes copyrighted material, such as quotes or images, we make sure to obtain the necessary rights and permissions to avoid legal issues down the line.


</p>

        <h1 className="text-3xl md:text-4xl text-sky-500 mt-12">Hire Self-Publishing Experts At Affordable Pricing
        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        Our ghostwriting services are available round the clock to help you throughout the publishing process. We make sure the customer representatives are available on the desks 24/7 to forward your publishing concerns to us. Our representatives are multi-lingual so no matter what language you speak, we will assist you in your native language.

</p>
       
        <h1 className="text-3xl md:text-4xl text-sky-500 mt-12">Some Of The Best Publishing Platforms We Have Picked
        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        These are the platforms that have the largest number of online readers and are a go-to for millions of authors.
        </p>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        1. Amazon Kindle Direct Publishing (KDP): KDP is a popular choice for self-publishing ghostwritten books. It offers authors the opportunity to publish eBooks and paperbacks, set their prices, and distribute their books to millions of readers worldwide through Amazon’s platform.
        </p>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        2. Smashwords: Smashwords is another generally used platform for self-publishing eBooks. Our ghostwriters can help authors publish their eBooks to major online retailers such as Apple Books, Barnes & Noble, Kobo, and more, targeting a broad audience of readers.
        </p>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        3. Draft2Digital (D2D): D2D is a user-friendly platform that streamlines the self-publishing process for both authors and our ghostwriters. They assist authors in formatting and distributing their eBooks to multiple retailers, including Amazon, Apple Books, Barnes & Noble, and Kobo, all from a single dashboard.
        </p>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        4. Lulu: Lulu offers both print-on-demand and eBook publishing services, making it a versatile option for authors. Our ghostwriters can help authors publish and distribute their books to major online retailers and sell directly through the Lulu bookstore.
        </p>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        5. IngramSpark: IngramSpark specializes in print-on-demand and eBook distribution, making it an ideal platform for ghostwriters working with authors who want to publish both print and digital formats. Our self-publishing ghostwriters can assist authors in publishing high-quality print books and eBooks and distributing them to major retailers and libraries worldwide.
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