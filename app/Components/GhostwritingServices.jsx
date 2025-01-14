import Image from 'next/image'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { FaMoneyBillWave, FaBookReader, FaUndo, FaBookOpen } from 'react-icons/fa'

const ServiceItem = ({ text }) => (
  <div className="flex items-start space-x-2 mb-2">
    <div className="flex-shrink-0 mt-1">
      <BsCheckLg className="w-4 h-4 text-black" />
    </div>
    <span className="text-gray-600 text-sm">{text}</span>
  </div>
);

const GhostwritingServices = () => {
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
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* First Section */}
        <div className="text-center flex flex-col justify-start items-center mb-4">
          <h2 className="text-sky-500 text-sm uppercase mb-1">GHOSTWRITING SERVICES FOR YOU</h2>
          <h3 className="text-sky-500 text-2xl font-bold mb-4">ROUTE TO YOUR BEST-SELLING BOOK</h3>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Under one roof you will get to experience ingenious services for an unmatched result. You will witness and have a brilliant time with us. We carry on projects with professionalism, intelligence, and brilliance. We work on a fine process engineered by our experts with a knack for writing and editing. At Coastal Ghostwriting we invite you to our platform for a creative journey that can lead to a successful book publication. By joining Coastal Ghostwriting our clients get,
            </p>

            <div className="grid md:grid-cols-2 gap-x-6 gap-y-1">
              {services.map((service, index) => (
                <ServiceItem key={index} text={service} />
              ))}
            </div>

            <Link 
              href="/services"
              className="inline-block mt-4 text-black hover:text-blue-600 text-sm font-medium"
            >
              Read More »
            </Link>
          </div>

          <div className="md:w-1/3">
            <div className="relative h-[300px]">
              <Image
                src="/books.png"
                alt="Book examples"
                fill
                className="object-contain object-center scale-70"
              />
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="mt-8">
          <h4 className="text-2xl text-sky-500 font-bold mb-3">Coastal Ghostwriting COMPANY – JOIN FOR INCLUSIVE JOURNEY</h4>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            Our ghostwriting agency is designed while keeping every ghostwriting framework required. You can trust us with your manuscripts, and drafts in order to put them in the public eye. Your job is to hire our ghostwriters and ours is to do the work. We work on a qualitative pattern with a steady speed and keep you assisted throughout the process.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-4">
              <FaMoneyBillWave className="w-6 h-6 text-gray-700" />
              <p className="text-sm">
                <span className="font-semibold">Various Payments</span>: As an international operating agency, we offer our clients multiple online payment methods.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <FaBookReader className="w-6 h-6 text-gray-700" />
              <p className="text-sm">
                <span className="font-semibold">Services</span>: We have created a simplified pattern from planning to publication for a complete ghostwriting experience.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <FaUndo className="w-6 h-6 text-gray-700" />
              <p className="text-sm">
                <span className="font-semibold">Easy Refunds</span>: We have a refund policy in case anything does not sit well we offer refunds.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <FaBookOpen className="w-6 h-6 text-gray-700" />
              <p className="text-sm">
                <span className="font-semibold">Vast Literary Knowledge</span>: With the finest craft in literary knowledge expect a Victorian writing piece to modern 19th century literature.
              </p>
            </div>
          </div>
        </div>

        {/* Third Section */}
        <div className="mt-8">
          <h4 className="text-2xl font-bold mb-3 text-sky-500">PROFESSIONAL GHOSTWRITING SERVICES FOR EXCEPTIONAL GHOSTWRITING SERVICES</h4>
          <h5 className="text-gray-600 text-xl mb-2">A Professional Platform Driven with Utmost Creativity</h5>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            With a vision to spread quality writing with valuable creativity, we pour our passion into the work. With compelling sentence structures and easy-to-grasp writing style, we work in original pieces of writing impeccably created for you.
          </p>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            We offer professional writers and editors who create content on your behalf. Our writers work on different systems such as books, articles, speeches, and more. Coastal Ghostwriting truly believes in keeping everything private, and quality a paramount rule of service. So, do not worry we work with tailored specifications, without revealing any identity.
          </p>
        </div>

        {/* Fourth Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div>
            <h4 className="text-2xl text-sky-500 font-bold mb-3">EDITING SERVICES</h4>
            <h5 className="text-gray-600 text-xl mb-2">Refining your Manuscripts: Professional Editing Services</h5>
            <p className="text-gray-600 text-sm leading-relaxed">
              Editing helps maintain the credibility of the manuscript. Our responsibilities are to catch the typographical and grammatical errors, double-check, and keep up with the accuracy. This process demands a lot of attention and we assert our best efforts in editing and proofreading. Our ghostwriting services are ahead of competitors until your highest degree of satisfaction is reached.
            </p>
          </div>

          <div>
            <h4 className="text-2xl text-sky-500 font-bold mb-3">PUBLISHING SERVICES</h4>
            <h5 className="text-gray-600 text-xl mb-2">Complete Publishing Support with Flawless Execution</h5>
            <p className="text-gray-600 text-sm leading-relaxed">
              Book publication is among the final steps of ghostwriting. Where we have the best ghostwriters for hire, we also work on our publication services. It is among the essentials and a top goal in accomplishments. Our methods use a proper method and strategy to ensure a manuscript goes out perfectly through our publication checkpoint. Our team takes care of every intricate matter of publication.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GhostwritingServices
