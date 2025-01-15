'use client';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Portfolio() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const books = [
    { id: 1, src: '/1.jpg' },
    { id: 2, src: '/2.jpg'},
    { id: 3, src: '/3.jpg'},
    { id: 4, src: '/4.jpg'},
    { id: 5, src: '/5.jpg'},
    { id: 6, src: '/6.jpg'},
    { id: 7, src: '/7.jpg'},
    { id: 8, src: '/8.jpg'},
    { id: 9, src: '/9.jpg'},
    { id: 10, src: '/10.jpg'}
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-12">
        
        
        <div className="relative px-8">
          <Slider {...settings}>
            {books.map((book) => (
              <div key={book.id} className="px-4">
                <div className="relative h-[500px] w-full group">
                  <Image
                    src={book.src}
                    alt={"book image"}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}