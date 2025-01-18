import React from 'react'

const ServiceSection = ({ title, children }) => (
  <div className="mb-8">
    <h3 className="text-xl text-gray-700 font-bold mb-2">{title}</h3>
    {children}
  </div>
);

const WhyChooseUs = () => {
  return (
    <section className="py-12 bg-sky-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl text-gray-700 font-bold mb-2">WHY DO YOU NEED TO CHOOSE US?</h2>
        <p className="text-gray-600 text-justify text-sm mb-8">
          In the course of ghostwriters for hire, Coastal Ghostwriting is one of the places where you have exceptional experience in providing its clients with hassle-free services. We offer cheap ghostwriting services that cater to every writer in the industry.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <ServiceSection title="Branding and Publicity">
              <p className="text-gray-600 text-justify text-sm mb-4">
                Branding of your book is an essential aspect of any product. Our team leaves no room to publicize your book in order to make it reachable to the readers. To ensure this, our marketing specialists bring innovative and unique marketing strategies to your disposal.
              </p>
              <p className="text-gray-600 text-justify text-sm">
                Branding and publicity are different facets of a comprehensive marketing strategy. It is essential to do branding to create an impression and message for your book.
              </p>
            </ServiceSection>

            <ServiceSection title="Web-Design">
              <p className="text-gray-600 text-justify text-sm mb-4">
                Often readers cannot navigate and locate your book's website, all your efforts will be ineffective. To avoid this, you need an effective website. A crafty web design improves the usability and ranking of your digital marketing. Therefore, we work on credible compelling web design that does wonders for your brand's visibility and demand.
              </p>
              <p className="text-gray-600 text-justify text-sm">
                Navigation, web content, maintaining brand consistency, and retaining customers' trust are all vital ingredients that go into creating a credible website.
              </p>
            </ServiceSection>

            <ServiceSection title="Audio Books">
              <p className="text-gray-600 text-justify text-sm">
                Isn't it exciting to make your book available by audio? Your readers have greater choices now. When anyone reads or listens to your audiobook. It allows you to create interconnectedness with the readers. Moreover, audiobooks are more accessible, entertaining and awaken the creativity zone of the listeners.
              </p>
            </ServiceSection>
          </div>

          {/* Right Column */}
          <div>
            <ServiceSection title="Book Video Trailers">
              <p className="text-gray-600 text-justify text-sm mb-4">
                It is one of the methods we use to promote your book in the market. Our expert marketing team makes short, appealing, and engaging video trailers for your book in order to raise its awareness among the targeted audience. After all, nothing can be more attractive to the eye than live visuals.
              </p>
              <p className="text-gray-600 text-justify text-sm">
                Do you know? trailers are a very unique and eye-catching way to market your book and get the attention your book needs.
              </p>
            </ServiceSection>

            <ServiceSection title="SEO Marketing">
              <p className="text-gray-600 text-justify text-sm mb-4">
                Search engine optimization (SEO) is the trickiest digital marketing tool that is used to optimize websites for search engines. In it, as a result, it improves search engine rankings. A strategic SEO ensures your website is more responsive to searches from all over the world. Moreover, a great way to increase the quality of a website is by making it user-friendly, faster, and easier to navigate.
              </p>
              <p className="text-gray-600 text-justify text-sm">
                Our web designers foresee the fact that placing important information in the right place or area of the website also improves SEO.
              </p>
            </ServiceSection>

            <ServiceSection title="Cover Design">
              <p className="text-gray-600 text-justify text-sm">
                The first impression is the last, and no wonder, before the reader opens the book, a good cover design makes that choice even easier. Hence, we have a team of designers to provide that unique and pioneering cover design and skilled professional typesetting to attract the reader's eye.
              </p>
            </ServiceSection>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
