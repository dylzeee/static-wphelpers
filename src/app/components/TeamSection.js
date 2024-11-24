const teamMembers = [
    {
        name: 'John Doe',
        role: 'Founder & CEO',
        image: 'https://via.placeholder.com/150',
    },
    {
        name: 'Jane Smith',
        role: 'Head of Operations',
        image: 'https://via.placeholder.com/150',
    },
    {
        name: 'Emily Johnson',
        role: 'Lead Developer',
        image: 'https://via.placeholder.com/150',
    },
];

export default function TeamSection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-trustworthyBlue">Meet Our Team</h2>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="text-center">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-32 h-32 mx-auto rounded-full shadow-lg"
                            />
                            <h3 className="mt-4 text-xl font-bold text-trustworthyBlue">{member.name}</h3>
                            <p className="mt-2 text-gray-600">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
