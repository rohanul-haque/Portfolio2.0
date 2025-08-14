import { Button } from "@/components/ui/button";

const ContactPage = () => {
  return (
    <section className="px-4 sm:px-8 lg:px-16 mt-10">
      <h2 className="text-4xl font-bold mb-2 text-center">Contact Me</h2>
      <span className="block h-1 w-24 bg-blue-600 dark:bg-white rounded-full mx-auto mb-8"></span>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Contact Form */}
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full px-4 py-2 border-[2px] rounded-md border-blue-500 dark:border-white outline-none placeholder:text-black dark:placeholder:text-white"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full px-4 py-2 border-[2px] rounded-md border-blue-500 dark:border-white outline-none placeholder:text-black dark:placeholder:text-white"
              placeholder="Your Email"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full px-4 py-2 border-[2px] rounded-md border-blue-500 dark:border-white outline-none placeholder:text-black dark:placeholder:text-white"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>

          <Button
            type="submit"
            className="w-full bg-purple-600 text-white py-2.5 rounded-lg hover:bg-purple-700 transition-colors cursor-pointer"
          >
            Send Message
          </Button>
        </form>

        {/* Location Map */}
        <div className="h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d171.09902551401007!2d88.83144523481388!3d25.738936648477157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1738789290253!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Embed"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
