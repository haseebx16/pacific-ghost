import ContactBanner from '@/app/Components/ContactBanner'
import DiscountForm from '@/app/Components/DiscountForm'
import { Font } from '@/app/Components/font/font'
import Footer from '@/app/Components/Footer'
import Nav from '@/app/Components/Nav'
import Testimonials from '@/app/Components/Testimonials'
import VideoTestimonials from '@/app/Components/VideoTestimonials'
import React from 'react'

const page = () => {
  return (
    <div className={`${Font.className}`}>
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
          <h1 className="text-white text-4xl md:text-5xl font-bold">Enjoy the Best Book Illustration Services by Coastal Ghostwriting</h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-[90%] mx-auto py-12 gap-8">
      <div className="md:w-[65%] w-full space-y-8">
        <p className="text-gray-500 text-justify text-sm">
        Enjoy premium and enthralling book illustration services from Coastal Ghostwriting . We are a comprehensive ghostwriting service where we create numerous services related to the industry. Our platform is specially created for self-publishers. If you have written a book, but wondering about its illustration. With our affordable prices and fulfilling custom demands, we carry out the best in what we do. So, cut around from everywhere and look for us and get our book illustrator for hire.
        </p>
        <p className="text-gray-500 text-justify mt-6 text-sm">
        No matter what the age of the reader is, we know how to deal with it. We work on methods that intrigue the readers in learning and adapt to making connections with the content better. It is not only about good books, but great books. So, here we are to help you in creating great books. The right kind of publication will help you stand out, giving more people access to your book. So, are you ready for a book illustrator for hire?
        </p>
        <p className="text-gray-500 text-justify mt-6 text-sm">
        Coastal Ghostwriting is here to create an imaginative world of stunning pictures, for writers who are a part of the self-publication industry.
        </p>

        {/* Section 1 */}
        <h1 className="text-3xl md:text-4xl text-sky-500 mt-12">An Ocean of Talent – Children’s Book Illustrators for Hire        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        Book Illustration Services are a major part of children’s books. At Coastal Ghostwriting we have a talented team of illustrators who hand trace alluring images creating visionary characters
        </p>
        
        
        <h1 className="text-3xl md:text-4xl text-sky-500 mt-12">Why Do You Need Book Illustration Services?</h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        Book illustration services are important for keeping children’s reading habits. The book illustration keeps them busier and it is also easier for them to understand the storyline. This works like a motivational act toward developing a reading habit. Our illustrators are professionals who know how to attract children.
        </p>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        The illustrators need to be aware of child psychology so illustration involves a child’s development and growth. Parents like to keep their children busy and books will completely fulfill this purpose. Children are attracted to colorful images and also a factor in developing their reading habits.
        </p>
        
        <h1 className="text-3xl md:text-4xl text-sky-500 mt-12">What Can You Expect from Us?</h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        You can expect impeccable services from us. We have created a customer design service for you where we work on strategic methods to fulfill all kinds of illustration services for children.
        </p>
        <p className="text-gray-500 text-justify mt-2 text-sm">
          1. A visionary approach to crafting images and meeting the theme and genre of the book. Coastal Ghostwriting offers custom children’s book illustration services.
        </p>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        2. You are allowed to choose your illustrator, check our designer’s work, and choose who you like. We have a clan of illustrators who are engineered to match the vision of your book. So, when you choose them, get a specific style of illustration.
        </p>
        <p className="text-gray-500 mt-2 text-sm">
        3. Experience different styles of illustrations, we work on different types of illustration techniques that help in setting the themes of the book.
        </p>

        <h1 className="text-3xl md:text-4xl text-sky-500 mt-12">Affordable Book Illustration Services – Find All at One Place</h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        Professional Book Illustration Services from Coastal Ghostwriting is a colorful and creative journey where we work on endless imaginations in creating illustrations. We are not limited to cartoon characters or serene sceneries. Have you ever thought of creating an imaginary world? Well, we do that with precision and perfection. Here are some of the book illustrations we work on.
        </p>
       
        <h1 className="text-2xl font-bold md:text-3xl mt-8">Fairytale Book Illustration </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        We work on imaginary characters and popular characters among the people. Redefining to redesigning them we have a popular demand. We know that children are fond of fairytales, therefore, we work on creative children’s art and provide them with fairy tale characters inspiring children.
        </p>
        <h1 className="text-2xl font-bold md:text-3xl mt-8">First Books Illustration</h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        Every child begins their book journey with their book, most books are imagery helping children create a world around them. We like to work on vector book illustrations helping children educate. 
        </p>
        <h1 className="text-2xl font-bold md:text-3xl mt-8">Folklore Books Illustration</h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        takes back children to a traditional world where we take on by creating illustrations of folklore tales. We create imaginative yet informational designs that help in children’s mental growth and ability to grasp[ around themselves.
        </p>
        <h1 className="text-2xl font-bold md:text-3xl mt-8">Fantasy books Illustration        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        There are no limitations to a child’s imagination and we love to be a part of creating and fostering children’s imagination. Imagine a blue forest where there are pixies, birds, and angels.
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
    </div>
  )
}

export default page