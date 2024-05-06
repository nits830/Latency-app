import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="h-14 w-14 bg-blue-500 rounded-full flex flex-shrink-0 justify-center items-center text-white text-2xl font-mono">?</div>
              <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h2 className="leading-relaxed">Contact Us</h2>
                <p className="text-sm text-gray-500 font-normal leading-relaxed">Get in touch with us for any inquiries or support.</p>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex flex-col">
                  <label htmlFor="name" className="leading-loose">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your Name" className="px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"/>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="leading-loose">Email</label>
                  <input type="text" id="email" name="email" placeholder="Your Email" className="px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"/>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="message" className="leading-loose">Message</label>
                  <textarea id="message" name="message" placeholder="Your Message"  className="px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"></textarea>
                </div>
                <button className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-lg px-8 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="submit">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
