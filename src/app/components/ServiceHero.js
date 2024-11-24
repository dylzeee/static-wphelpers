export default function ServiceHero({ title, subtitle }) {
    return (
        <section className="py-24 bg-gradient-to-r from-trustworthyBlue to-lightBlue text-white text-center">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-5xl font-extrabold tracking-tight leading-tight">
                    {title}
                </h1>
                <p className="mt-6 text-lg text-gray-200">{subtitle}</p>
            </div>
        </section>
    );
}
