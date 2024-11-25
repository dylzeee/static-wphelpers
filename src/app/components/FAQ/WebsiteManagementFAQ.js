export default function WebsiteManagementFAQ({ faqs }) {

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-trustworthyBlue">Frequently Asked Questions</h2>
                <div className="mt-12 space-y-8">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
                            <h3 className="text-xl font-semibold text-trustworthyBlue">{faq.question}</h3>
                            <p className="mt-2 text-gray-600">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}