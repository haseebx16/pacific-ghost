'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
  {
    text: "I am completely satisfied with Coastal Ghostwriting. They have made it possible for me to write my book. I was able to create a rough draft of it initially but couldn't write it. I can hardly wait until my next story inspiration. My great-grandchildren live in different states. The books give me a way of sharing my thoughts with my children.",
    author: "JANE / LEE"
  },
  {
    text: "Working with Coastal Ghostwriting was an incredible experience. Their team's dedication and creativity helped bring my story to life in ways I never imagined. The process was smooth, and the results exceeded my expectations.",
    author: "MICHAEL / SMITH"
  },
  {
    text: "The level of professionalism and attention to detail at Coastal Ghostwriting is outstanding. They captured my voice perfectly and helped me create a book that truly resonates with my audience. I couldn't be happier with the outcome.",
    author: "SARAH / WILSON"
  }
]

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">WHAT OUR CUSTOMERS HAVE TO SAY</h2>
        <p className="text-gray-600 text-center mb-12">
          As a reputable ghostwriting agency, we have plenty of reviews and comments that are a positive note for the credibility of our company.
        </p>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="max-w-4xl"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="text-center px-8 pb-12">
                <blockquote className="text-gray-600 text-lg italic mb-6">
                  "{testimonial.text}"
                </blockquote>
                <p className="text-gray-800 font-semibold">{testimonial.author}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials
