import Link from 'next/link'

const ContactBanner = () => {
  return (
    <section className="bg-gray-800 w-[90%] flex flex-col justify-center items-center py-4 relative mx-auto">
      <div className="w-[80%] mx-auto max-w-7xl">
        <div className="text-white">
          <h2 className="text-3xl font-semibold mb-6">Hit The Digits And Contact Us!</h2>
          <p className="text-gray-300 mb-8 text-lg">Have An Idea? Talk To Us, Get on Board, and Let's Connect</p>
          <Link 
            href="/contact"
            className="inline-block text-white hover:text-gray-300 transition-colors duration-300 text-lg"
          >
            Consult Now »
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ContactBanner
