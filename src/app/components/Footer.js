export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm">&copy; 2024 WP Helpers. All Rights Reserved.</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="hover:text-lightBlue">Privacy Policy</a>
                    <a href="#" className="hover:text-lightBlue">Terms of Service</a>
                    <a href="#" className="hover:text-lightBlue">Contact</a>
                </div>
            </div>
        </footer>
    );
}
