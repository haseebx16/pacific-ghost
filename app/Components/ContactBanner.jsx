import Link from 'next/link'

const ContactBanner = () => {
  return (
    <div className="bg-sky-50">
    <section className="bg-sky-900 shadow-lg shadow-sky-500  w-[70%] flex flex-col justify-center items-center py-4 relative mx-auto">
      <div className="w-[80%] mx-auto max-w-7xl">
        <div className="text-white flex flex-col justify-center items-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-2">Hit The Digits And Contact Us!</h2>
          <p className="text-gray-300 mb-6 md:text-xl text-lg">Have An Idea? Talk To Us, Get on Board, and Let's Connect</p>
          <Link 
            href="/contact"
            className="inline-block text-white bg-sky-600 px-6 py-2 rounded-full hover:text-black hover:bg-sky-100 duration-300 text-lg"
          >
            Consult Now »
          </Link>
        </div>
      </div>
    </section>
    </div>
  )
}

export default ContactBanner
