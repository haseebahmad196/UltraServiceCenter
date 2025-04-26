export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Contact Us Section */}
      <section className="py-12 px-4 sm:px-6 md:px-8 bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white hover:text-ultra-yellow hover:scale-105 transition-all duration-300 mb-4">
            Get in Touch with Ultra Service Center
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            Have questions or need to schedule a service? Our team in Bowie, MD, is here to help with all your automotive needs. Reach out today for expert care and reliable service!
          </p>
          <a
            href="mailto:info@ultraservicecenter.com"
            className="inline-block bg-ultra-yellow text-ultra-black font-bold py-3 px-6 rounded-md hover:bg-yellow-600 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ultra-blue"
          >
            Contact Us Today
          </a>
        </div>
      </section>

      {/* Optional: Add a Contact Form or Additional Info */}
      <section className="py-12 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-ultra-blue mb-4">Our Contact Details</h3>
          <p className="text-lg text-gray-700 mb-2">
            Email: <a href="mailto:info@ultraservicecenter.com" className="text-ultra-blue hover:text-ultra-yellow">info@ultraservicecenter.com</a>
          </p>
          <p className="text-lg text-gray-700 mb-2">
            Phone: <a href="tel:+1234567890" className="text-ultra-blue hover:text-ultra-yellow">+1 (234) 567-890</a>
          </p>
          <p className="text-lg text-gray-700">
            Address: 1234 Auto Lane, Bowie, MD 20715
          </p>
        </div>
      </section>
    </div>
  );
}