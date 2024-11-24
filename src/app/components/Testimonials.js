const testimonials = [
    { name: 'John Doe', feedback: 'Amazing service! My website is faster and smoother.', image: 'https://via.placeholder.com/100' },
    { name: 'Jane Smith', feedback: 'I love the attention to detail and prompt support.', image: 'https://via.placeholder.com/100' },
    { name: 'Mark Lee', feedback: 'Highly recommend WP Helpers for WordPress management.', image: 'https://via.placeholder.com/100' },
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold tracking-tight text-center text-trustworthyBlue">
                    What Our Clients Say
                </h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow">
                            <img
                                src={testimonial.image}
                                alt={`${testimonial.name}'s photo`}
                                className="w-20 h-20 rounded-full mx-auto"
                            />
                            <p className="mt-4 text-gray-600 italic">"{testimonial.feedback}"</p>
                            <p className="mt-4 text-trustworthyBlue font-bold">{testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
