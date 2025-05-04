const Contact = () => {
    return (
      <section className="min-h-screen px-6 py-16 bg-gray-900 text-white">
        <h2 className="text-4xl font-bold text-cyan-400 mb-8">Contact</h2>
  
        <p className="mb-8 max-w-xl">
          I’m always open to discussing automation, SCADA projects, or web tech collaborations.
          Feel free to reach out!
        </p>
  
        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          className="space-y-6 max-w-xl"
        >
          <div>
            <label className="block mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded text-white"
            />
          </div>
  
          <div>
            <label className="block mb-1">Your Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded text-white"
            />
          </div>
  
          <div>
            <label className="block mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded text-white"
            ></textarea>
          </div>
  
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded text-white font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </section>
    );
  };
  
  export default Contact;
  