'use client'
import Image from 'next/image'
import { useState } from 'react'

const testimonials = [
  {
    id: 'M6xr1BILNtc',
    name: 'Victoria Johnson',
  },
  {
    id: '5-TAaBeC65o',
    name: 'Henry Charles',
  },
  {
    id: 'Z2uRAW_z44k',
    name: 'Jason',
  }
]

const VideoCard = ({ id, name }) => {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
  }

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full aspect-video rounded-lg overflow-hidden">
        {!isPlaying ? (
          <div className="relative w-full h-full">
            <Image
              src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
              alt={name}
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-black bg-opacity-20">
              <button
                onClick={handlePlay}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                </div>
              </button>
              <div className="absolute top-4 left-4 text-white font-bold uppercase">
                {name}
              </div>
            </div>
          </div>
        ) : (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            title={name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolutse inset-0"
          />
        )}
      </div>
      <h3 className="text-xl font-bold mt-4 text-center">{name}</h3>
    </div>
  )
}

const VideoTestimonials = () => {
  return (
    <section className=" bg-sky-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <VideoCard
              key={testimonial.id}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default VideoTestimonials
