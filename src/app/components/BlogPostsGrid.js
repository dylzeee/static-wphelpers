const blogPosts = [
    {
        id: 1,
        title: '10 Tips to Optimize Your WordPress Site',
        author: 'John Doe',
        date: 'Nov 20, 2024',
        image: 'https://via.placeholder.com/400x300',
    },
    {
        id: 2,
        title: 'Why Secure Hosting is Crucial for Your Business',
        author: 'Jane Smith',
        date: 'Nov 18, 2024',
        image: 'https://via.placeholder.com/400x300',
    },
    {
        id: 3,
        title: 'The Future of Custom WordPress Development',
        author: 'Emily Johnson',
        date: 'Nov 15, 2024',
        image: 'https://via.placeholder.com/400x300',
    },
    {
        id: 4,
        title: 'How to Boost Website Performance',
        author: 'Mark Lee',
        date: 'Nov 10, 2024',
        image: 'https://via.placeholder.com/400x300',
    },
];

export default function BlogPostsGrid() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
                        >
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-trustworthyBlue">
                                    {post.title}
                                </h3>
                                <p className="mt-2 text-sm text-gray-500">
                                    By {post.author} on {post.date}
                                </p>
                                <a
                                    href="#"
                                    className="mt-4 inline-block text-lightBlue font-medium hover:underline"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <button className="bg-lightBlue text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-500">
                        Load More
                    </button>
                </div>
            </div>
        </section>
    );
}
