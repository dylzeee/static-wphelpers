import ContactDetails from './ContactDetails';

export default function ContactIntroduction() {
    return (
        <section className="py-20 bg-gradient-to-r from-trustworthyBlue to-lightBlue text-white text-center">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                    Let’s Talk
                </h1>
                <div className="mt-12">
                    <ContactDetails />
                </div>
            </div>
        </section>
    );
}
