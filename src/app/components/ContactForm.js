export default function ContactForm() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-trustworthyBlue">
                    Send Us a Message
                </h2>
                <p className="mt-4 text-lg text-center text-gray-600">
                    Fill out the form below and we’ll get back to you as soon as possible.
                </p>
                <form className="mt-12 space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your name"
                            className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lightBlue focus:outline-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your email"
                            className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lightBlue focus:outline-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-gray-700 font-medium">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Your message"
                            rows="6"
                            className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lightBlue focus:outline-none"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-lightBlue text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-500 focus:ring-2 focus:ring-blue-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}
