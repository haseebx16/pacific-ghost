"use client";

import ContactBanner from '@/app/Components/ContactBanner';
import DiscountForm from '@/app/Components/DiscountForm';
import Footer from '@/app/Components/Footer';
import Nav from '@/app/Components/Nav';
import Testimonials from '@/app/Components/Testimonials';
import React from 'react';
import { useState } from 'react';
import emailjs from "emailjs-com";
import FileUploader from '../Components/FileUploader';

const Page = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        goals: [],
        otherGoal: '',
        publishingType: '',
        brandLink: '',
        previousBooks: '',
        targetAudience: '',
        audienceAdjectives: '',
        similarBooks: '',
        hasCoverDesign: '',
        coverDesigner: '',
        needsCoverServices: '',
        designPreferences: '',
        favoriteCoverss: '',
        coverText: '',
        coverType: '',
        imageCount: '',
        graphicsSource: '',
        inkColors: '',
        pageSize: '',
        bookLength: '',
        needsEbook: '',
        kdpInkPaper: '',
        layoutReadyDate: '',
        releaseDate: '',
        budget: '',
        manuscriptLink: ""
      });

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      };
    
      const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData(prev => ({
          ...prev,
          goals: checked 
            ? [...prev.goals, value]
            : prev.goals.filter(goal => goal !== value)
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          await emailjs.send(
            'service_a37lzzn',
            'template_o7vss95',
            {
              ...formData,
              goals: formData.goals.join(', ')
            },
            '5mCikQQutljFnzPc-'
          );
    
          alert('Form submitted successfully!');
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            goals: [],
            otherGoal: '',
            publishingType: '',
            brandLink: '',
            previousBooks: '',
            targetAudience: '',
            audienceAdjectives: '',
            similarBooks: '',
            hasCoverDesign: '',
            coverDesigner: '',
            needsCoverServices: '',
            designPreferences: '',
            favoriteCoverss: '',
            coverText: '',
            coverType: '',
            imageCount: '',
            graphicsSource: '',
            inkColors: '',
            pageSize: '',
            bookLength: '',
            needsEbook: '',
            kdpInkPaper: '',
            layoutReadyDate: '',
            releaseDate: '',
            budget: '',
            manuscriptLink: ""
          });
        } catch (error) {
          console.error('Error sending email:', error);
          alert('Failed to send email. Please try again.');
        }
      };

      const handleFileUpload = (url) => {
        setFormData(prev => ({
          ...prev,
          manuscriptLink: url
        }));
      };

  return (
    <>
      <Nav />
      <div className="relative">
        <img
          src="/About-01.jpg"
          alt="About Background"
          className="w-full z-1 h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center md:justify-start justify-center md:px-12">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Book Project Questionnaire
          </h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-[90%] mx-auto py-12 gap-8">
        <div className="md:w-[65%] w-full space-y-8">
          <p className="text-gray-500 text-justify text-sm">
            We're so glad that your book is ready to be designed and that you want to partner with us! After all the late nights you have poured into your manuscript, it deserves to look its best with professional design and layout. To help us quote on and then create the most suitable design for you, your book, and your readers, please answer the following questions.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-100 p-6 rounded-lg shadow-lg">
            <div>
              <label className="block text-gray-700 font-semibold">Name <span className="text-red-500">(required)</span></label>
              <div className="flex gap-4 mt-1">
                <input type="text" placeholder="First Name" name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange} className="w-1/2 p-2 border rounded" required />
                <input type="text" name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange} placeholder="Last Name" className="w-1/2 p-2 border rounded" required />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Email <span className="text-red-500">(required)</span></label>
              <input type="email" name="email"
                  value={formData.email}
                  onChange={handleInputChange} className="w-full p-2 border rounded mt-1" required />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">What is your goal in writing and releasing this book?</label>
              <input type="text" name="otherGoal"
                  value={formData.otherGoal}
                  onChange={handleInputChange} placeholder="Explain Your Goal" className="w-full p-2 border rounded mt-2" />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Are you self-publishing or working with a publisher?</label>
              <select name="publishingType"
                  value={formData.publishingType}
                  onChange={handleInputChange} className="w-full p-2 border rounded mt-1">
                <option>Select an option</option>
                <option>Self-Publishing</option>
                <option>Working with a Publisher</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Do you have an established brand? If so, please share a link.</label>
              <input type="url" name="brandLink"
                  value={formData.brandLink}
                  onChange={handleInputChange} className="w-full p-2 border rounded mt-1" />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">If you have published previous books, please share links or more information.</label>
              <textarea name="previousBooks"
                  value={formData.previousBooks}
                  onChange={handleInputChange} className="w-full p-2 border rounded mt-1" rows="3"></textarea>
            </div>
            <h2 className="text-xl font-semibold">Your Audience Details</h2>
            <div>
              <label className="block text-gray-700 font-semibold">Who is the target audience for your book? <span className="text-red-500">(required)</span></label>
              <textarea name="targetAudience"
                  value={formData.targetAudience}
                  onChange={handleInputChange} className="w-full p-2 border rounded mt-1" rows="3" required></textarea>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">List five adjectives that describe your target audience. <span className="text-red-500">(required)</span></label>
              <textarea name="audienceAdjectives"
                  value={formData.audienceAdjectives}
                  onChange={handleInputChange} className="w-full p-2 border rounded mt-1" rows="2" required></textarea>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Please provide links to or titles of three books that might be targeted to the same audience as your book.</label>
              <textarea name="similarBooks"
                  value={formData.similarBooks}
                  onChange={handleInputChange} className="w-full p-2 border rounded mt-1" rows="3"></textarea>
            </div>
            
           
            {/* New Book Cover Details Section */}
            <h2 className="text-xl font-semibold">Your Book Cover Details</h2>
            <div>
              <label className="block text-gray-700 font-semibold">Do you already have a book cover design?</label>
              <select name="hasCoverDesign"
                  value={formData.hasCoverDesign}
                  onChange={handleInputChange} className="w-full p-2 border rounded mt-1">
                <option>Select an option</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">If yes, who designed your book cover?</label>
              <input type="text" name="coverDesigner"
                  value={formData.coverDesigner}
                  onChange={handleInputChange} className="w-full p-2 border rounded mt-1" />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">If yes, do you need any other services related to your book cover?</label>
              <select name="needsCoverServices"
                  value={formData.needsCoverServices}
                  onChange={handleInputChange} className="w-full p-2 border rounded mt-1">
                <option>Select an option</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Do you have any personal preferences in terms of colors, styles, or symbology?</label>
              <textarea name="designPreferences"
                  value={formData.designPreferences}
                  onChange={handleInputChange} className="w-full p-2 border rounded mt-1" rows="3"></textarea>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Which book covers are your favorites?</label>
              <textarea  className="w-full p-2 border rounded mt-1" rows="3"></textarea>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">What text should appear on your book's front cover?</label>
              <textarea name="coverText"
                  value={formData.coverText}
                  onChange={handleInputChange} className="w-full p-2 border rounded mt-1" rows="3"></textarea>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">What kind of cover will your book have? <span className="text-red-500">(required)</span></label>
              <select name="coverType"
                  value={formData.coverType}
                  onChange={handleInputChange} className="w-full p-2 border rounded mt-1">
                <option>Select an option</option>
                <option>Hardcover</option>
                <option>Paperback</option>
                <option>eBook</option>
              </select>
            </div>
            <h2 className="text-xl font-semibold">Your Book Interior Details</h2>
            <div>
              <label className="block text-gray-700 font-semibold">How many images, tables or charts are in your book? <span className="text-red-500">(required)</span></label>
              <input type="number" name="imageCount"
                  value={formData.imageCount}
                  onChange={handleInputChange} className="w-full p-2 border rounded mt-1" required />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">If your book needs graphics, photos and/or illustrations, which of the following is true?</label>
              <select name="graphicsSource"
                  value={formData.graphicsSource}
                  onChange={handleInputChange} className="w-full p-2 border rounded mt-1">
                <option>Select an option</option>
                <option>I will provide the graphics, photos and/or illustrations in print-ready quality.</option>
                <option>I need assistance with graphics, photos and/or illustrations.</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">What color(s) of ink are you planning to have in your book interior?</label>
              <select name="inkColors"
                  value={formData.inkColors}
                  onChange={handleInputChange} className="w-full p-2 border rounded mt-1">
                <option>Select an option</option>
                <option>Black & White</option>
                <option>Full Color</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">What is the page size of your book (width x height)? <span className="text-red-500">(required)</span></label>
              <select name="pageSize"
                  value={formData.pageSize}
                  onChange={handleInputChange} className="w-full p-2 border rounded mt-1">
                <option>Select an option</option>
                <option>5.5" x 8.5"</option>
                <option>6" x 9"</option>
                <option>8.5" x 11"</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Do you want your book to look longer than it really is, shorter than it really is, or neither?</label>
              <select name="bookLength"
                  value={formData.bookLength}
                  onChange={handleInputChange} className="w-full p-2 border rounded mt-1">
                <option>Select an option</option>
                <option>Longer</option>
                <option>Shorter</option>
                <option>Neither</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Will you also need your book interior layout converted to ebook format?</label>
              <select name="needsEbook"
                  value={formData.needsEbook}
                  onChange={handleInputChange} className="w-full p-2 border rounded mt-1">
                <option>Select an option</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">If you are printing with Amazon KDP, which ink and paper have you selected?</label>
              <select name="kdpInkPaper"
                  value={formData.kdpInkPaper}
                  onChange={handleInputChange} className="w-full p-2 border rounded mt-1">
                <option>Select an option</option>
                <option>Black & White on Cream Paper</option>
                <option>Black & White on White Paper</option>
                <option>Full Color on White Paper</option>
              </select>
            </div>
            
            <h2 className="text-xl font-semibold">Your Timeline Details</h2>
            <div>
              <label className="block text-gray-700 font-semibold">By which date do you expect your book will be ready for layout? <span className="text-red-500">(required)</span></label>
              <input name="layoutReadyDate"
                  value={formData.layoutReadyDate}
                  onChange={handleInputChange} type="date" className="w-full p-2 border rounded mt-1" required />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">By which date would you like to release your book?</label>
              <input name="releaseDate"
                  value={formData.releaseDate}
                  onChange={handleInputChange} type="date" className="w-full p-2 border rounded mt-1" />
            </div>
            
            <h2 className="text-xl font-semibold">Investment Details</h2>
            <div>
              <label className="block text-gray-700 font-semibold">What budget do you have in mind for your partnership with me?</label>
              <select name="budget"
                  value={formData.budget}
                  onChange={handleInputChange} className="w-full p-2 border rounded mt-1">
                <option>Select an option</option>
                <option>$1,500 - $3,000</option>
                <option>$3,000 - $5,000</option>
                <option>$5,000 - $10,000</option>
                <option>Over $10,000</option>
              </select>
            </div>
            
            <h2 className="text-xl font-semibold">Your File Details</h2>
            <div>
              <label className="block text-gray-700 font-semibold">Please paste a link to your book manuscript and/or book files here:</label>
              <input type="url" name="manuscriptLink"
                  value={formData.manuscriptLink}
                  onChange={handleInputChange} className="w-full p-2 border rounded mt-1" />
            </div>
            <label className="block text-gray-700 font-semibold">Upload Your Manuscript</label>
                <FileUploader onUpload={handleFileUpload} />
            {/* <button className="w-full bg-blue-600 text-white p-2 rounded font-semibold">Submit</button> */}
          </form>
        </div>
        <div className="md:w-[35%] w-full flex justify-center">
          <div className="w-full md:w-auto max-h-[500px] overflow-y-auto">
            <DiscountForm isOpen={true} />
          </div>
        </div>
      </div>
      <ContactBanner />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Page;
