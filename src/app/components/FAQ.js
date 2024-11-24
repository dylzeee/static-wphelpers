const faqs = [
    {
        question: 'Can I cancel anytime?',
        answer: 'Yes, you can cancel your subscription at any time without additional charges.',
    },
    {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards, including Visa, MasterCard, and American Express.',
    },
    {
        question: 'Do you offer discounts for annual billing?',
        answer: 'Yes, we offer a 10% discount if you choose annual billing.',
    },
];

export default function FAQ() {

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
