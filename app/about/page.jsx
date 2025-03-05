import React from 'react';
import Nav from '../Components/Nav';
import GhostwritingServices from '../Components/GhostwritingServices';
import WhyChooseUs from '../Components/WhyChooseUs';
import ContactBanner from '../Components/ContactBanner';
import Testimonials from '../Components/Testimonials';
import VideoTestimonials from '../Components/VideoTestimonials';
import Footer from '../Components/Footer';
import { FaAddressBook } from "react-icons/fa";
import { Font } from '../Components/font/font';
import { FaBookOpen, FaBookReader, FaMoneyBillWave, FaUndo } from 'react-icons/fa';
import { FaUserGroup } from "react-icons/fa6";
import { FaHeadphones } from "react-icons/fa6";
import { BsCheckLg } from 'react-icons/bs';
import AboutMain from '../Components/AboutMain';

const ServiceItem = ({ text }) => (
  <div className="flex items-start space-x-1 ">
    <div className="flex-shrink-0 mt-1">
      <BsCheckLg className="w-4 h-4 text-black" />
    </div>
    <span className="text-black leading-tight text-md">{text}</span>
  </div>
);

const Page = () => {

  const services = [
    "Planning And Guidance",
    "Robust Research And Strategies",
    "Timely Delivery",
    "High-Quality Writing Styles",
    "Accurately Met Client Requirements",
    "Fine-Quality Writing And Editing",
    "Transparent Communication Between The Teams And Clients",
    "Writing In All Genres",
    "Thorough Discussions Before Starting",
    "Vast Cluster Of Experienced Ghostwriters"
  ];

  return (
    <div className={`${Font.className}`}>
      <Nav />
      <div className="relative">
        
        <img
          src="/About-01.jpg"
          alt="About Background"
          className="w-full z-1 h-[400px] object-cover"
        />

        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="absolute inset-0 flex items-center md:justify-start justify-center md:px-12">
          <h1 className="text-white text-4xl md:text-5xl font-bold">About Us</h1>
        </div>
      </div>

      {/* <GhostwritingServices/>
      <WhyChooseUs/>
      <ContactBanner/>
      <Testimonials/> */}
      <div className="text-left flex flex-col justify-start items-start p-8 pb-0 mb-4">
          <h2 className="text-sky-500 text-md uppercase mb-1">GHOSTWRITING SERVICES FOR YOU</h2>
          <h3 className="text-sky-500 text-2xl font-bold ">The Ultimate Ghostwriting, Editing & Publishing Solution</h3>
        </div>

        <div className="flex flex-col md:flex-col ">
          <div className="w-full p-8 pt-0">
            <p className="text-gray-600 leading-tight text-justify text-md mb-4 ">
            Every great advancement is born out of a fascinating work of imagination. We, at Pacific Ghostwriting, will take that step forward for you. Every story deserves to be told and heard. Therefore, we invite you to experience the work of industry's most professional yet extremely innovative Ghostwriters under our one single platform.
            </p>
          <h3 className="text-sky-500 text-2xl font-bold ">Who Is A Ghostwriter?</h3>
            <p className="text-gray-600 leading-tight text-justify text-md pt-2 mb-4 ">
            A Ghostwriter is a writing professional who writes on behalf of other individuals. They not only write bestselling books, articles and biographies but also give rights to publish their work without their name. The story and the ideas will be of the person who hired the ghostwriter and the ghostwriter will transform those ideas into enchanting words. No matter how challenging the work is or what detailing you are working on, our incomparable GhostWriters will surpass all the difficulties with ease. Your satisfaction is our foremost priority, therefore all your writing and publishing requirements will be achieved without any hassle.
            </p>
          <h3 className="text-sky-500 text-2xl font-bold ">Delivering Excellence via Our Ghostwriter Services:</h3>
            <p className="text-gray-600 leading-tight text-justify text-md pt-2 ">
            As time consuming as it sounds, our GhostWriters have a massive bank of experience and training that enables them to take care of all of your needs and requirements without absorbing much of your time. Our Ghostwriting services are not only designed to do the writing tasks, we will move further to entertain you with our planning and coaching for the best publishing results. At Pacific Ghostwriting, you will be able to see an enormous array of experience of our GhostWriters in varying topics ranging from fiction to non-fiction, including suspense, crime, thriller, tragedy, love, history, biography and the list goes on.
            </p>
            <p className="text-gray-600 leading-tight text-justify text-md pt-2 mb-4 ">
            Our team of specialist ghostwriters are well equipped with all the required tools to achieve that milestone on your behalf. From the initial planning to the instant when you open your book for the first time, our process ensures everything is done with great precision. The contentment showed by our potential clients from various industrial background testifies our level of devotion and brilliance. Our Ghostwriters are extremely resilient to deliver their services with great accuracy.
            </p>
            <div className="grid md:grid-cols-1 gap-4">
                        <div className="flex items-center leading-tight space-x-4">
                          <FaMoneyBillWave className="w-6 h-6 text-black" />
                          <p className="text-md text-gray-700">
                            <span className="font-semibold text-black">Payment Plans</span>: We have a variety of options for your payment plans at your convenience. (On Regular Prices Only)
                          </p>
                        </div>
            
                        <div className="flex items-center space-x-4">
                          <FaBookReader className="w-6 h-6 text-black" />
                          <p className="text-md text-gray-700">
                            <span className="font-semibold text-black">Services</span>: From planning to editing and publishing, we cater all your ghostwriting needs
                          </p>
                        </div>
            
                        <div className="flex items-center space-x-4">
                          <FaUndo className="w-6 h-6 text-black" />
                          <p className="text-md text-gray-700">
                            <span className="font-semibold text-black">Easy Refunds</span>: We have a refund policy in case anything does not sit well we offer refunds.
                          </p>
                        </div>
            
                        <div className="flex items-center space-x-4">
                          <FaBookOpen className="w-6 h-6 text-black" />
                          <p className="text-md text-gray-700">
                            <span className="font-semibold text-black">Vast Literary Knowledge</span>: With the finest craft in literary knowledge expect a Victorian writing piece to modern 19th century literature.
                          </p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <FaAddressBook className="w-6 h-6 text-black" />
                          <p className="text-md text-gray-700">
                            <span className="font-semibold text-black">Secure Ownership</span>: You remain protected with our confidentiality and non-disclosure agreement at all times.
                          </p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <FaUserGroup className="w-6 h-6 text-black" />
                          <p className="text-md text-gray-700">
                            <span className="font-semibold text-black">Array Of Ghostwriters</span>: We a have a huge cluster of ghostwriters from various fields and experiences.
                          </p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <FaHeadphones className="w-6 h-6 text-black" />
                          <p className="text-md text-gray-700">
                            <span className="font-semibold text-black">24/7 Support</span>: Our 24/7 support team is ready to serve you via chat, email or call whenever you need
                          </p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <FaBookReader className="w-6 h-6 text-black" />
                          <p className="text-md text-gray-700">
                            <span className="font-semibold text-black">Authentic Research</span>: Our research is authentic and factual which helps us to get a grip of all the information available.
                          </p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <FaMoneyBillWave className="w-6 h-6 text-black" />
                          <p className="text-md text-gray-700">
                            <span className="font-semibold text-black">Retained Customers</span>: We offer quality compliance and professional strategy is your decision to come back with a fresh order.
                          </p>
                        </div>
                      </div>
          <h3 className="text-sky-500 text-2xl mt-6 font-bold ">What Makes Us Unique?</h3>
          <p className="text-gray-600 leading-tight text-justify text-md pt-2 mb-4 ">
          Let’s give an insight to the ghostwriter’s services that they provide with so precision. Supposedly, there might be an idea floating around your head or your creative horses might be running fast. Hence, you are pushed by your will to jot down that creativity on a piece of paper but you have time constraints or schedule restrictions and distractions. Here is where the need of a Pacific Ghostwriting pops in. Our ghostwriter will save your day. You just need to convey your idea and concept, along with all the drafts, brainstorming, outlines or documentation that you have, if any, and our ghostwriter will take your league ahead.
            </p>
          <h3 className="text-sky-500 text-2xl font-bold ">Our exceptional ghostwriting services:</h3>
          <p className="text-gray-600 leading-tight text-justify text-md pt-2 mb-4 ">
          Your imagination will be translated and transformed into an enticing and alluring story by our ghostwriter. From research to planning, and to organizing the structure, every task will be completely covered by the ghostwriter with the author’s consent. Seems too much to digest? No doubt! But our ghostwriters are skilled and trained to handle that pressure. Furthermore, despite the efforts that are pooled in by our ghostwriters are enormous, the credit lies with the author who originated the idea and gathered all the audacity to take that script high-up. Hence, the author will be the sole owner for his manuscript/ book. Our ghostwriter services will be invisible yet will have a massive impact for the author.
            </p>
          <h3 className="text-sky-500 text-2xl font-bold ">Pros to Hire a Ghostwriter from Pacific Ghostwriting:</h3>
          <p className="text-gray-600 leading-tight text-justify text-md pt-2 mb-4 ">
          Now the question that might hit your mind will be, Why to hire a Ghostwriter from us or What unique Ghostwriting services are we offering? We can, undoubtedly, relieve you from this worry. Our Ghostwriting services includes all of the following and more:
            </p>
            <div className="grid md:grid-cols-2 gap-x-4">
              {services.map((service, index) => (
                <ServiceItem key={index} text={service} />
              ))}
            </div>
          <p className="text-gray-600 leading-tight text-justify text-md pt-6 ">
          Hire a ghostwriter from an array of book Ghostwriter from us and we assure to bring you under our wings and let your dream transform into a reality.
            </p>
          </div>
          </div>
            <AboutMain/>
            <ContactBanner/>
            <Testimonials/>
      <Footer/>
    </div>
  );
};

export default Page;
