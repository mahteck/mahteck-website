export const metadata = {
  title: 'Contact Us | Mahteck',
  description: 'Get in touch with Mahteck for software services, consultancy or custom development.',
}

export default function ContactPage() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-10">
          Have a project in mind? Let’s talk.
        </p>
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://mahteck.com/thank-you" />
        
        <form
          action="https://formspree.io/f/mjkrpldd" // ← Replace with your Formspree form ID
          method="POST"
          className="bg-white shadow-md rounded-lg p-8 max-w-2xl mx-auto text-left"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://mahteck.com/thank-you" />

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2 text-sm">Full Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-black"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2 text-sm">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-black"
              placeholder="your@email.com"
            />
          </div>

           {/* Phone */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2 text-sm">Phone Number</label>
            <input
              type="tel"
              name="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="+92 301 1234567"
            />
          </div>

        {/* Subject */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2 text-sm">Subject</label>
          <select
            name="subject"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          >
            <option value="">Select a subject</option>
            <option value="general">General Inquiry</option>
            <option value="software">Software Development</option>
            <option value="support">Technical Support</option>
            <option value="consulting">Consulting Request</option>
          </select>
        </div>
        
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2 text-sm">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-black"
              placeholder="How can we help you?"
            />
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition"
            >
              Send Message
            </button>
          </div>
        </form>

      </div>
    </section>
  )
}
