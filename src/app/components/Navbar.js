"use client";

import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-trustworthyBlue">
                    WP Helpers
                </Link>
                {/* Navigation Links */}
                <div className="hidden md:flex space-x-8">
                    <Link href="/" className="hover:text-lightBlue">
                        Home
                    </Link>
                    <Link href="/services" className="hover:text-lightBlue">
                        Services
                    </Link>
                    <Link href="/resources" className="hover:text-lightBlue">
                        Resources
                    </Link>
                    <Link href="/about" className="hover:text-lightBlue">
                        About
                    </Link>
                    <Link href="/blog" className="hover:text-lightBlue">
                        Blog
                    </Link>
                    <Link href="/pricing" className="hover:text-lightBlue">
                        Pricing
                    </Link>
                    <Link href="/contact" className="hover:text-lightBlue">
                        Contact
                    </Link>
                </div>
                {/* Buttons */}
                <div className="hidden md:flex space-x-4">
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100">
                        Login
                    </button>
                    <Link
                        href="/pricing"
                        className="px-4 py-2 bg-lightBlue text-white rounded-lg font-medium hover:bg-blue-500"
                    >
                        Get Started
                    </Link>
                </div>
                {/* Mobile Menu Placeholder */}
                <button className="md:hidden bg-lightBlue text-white px-4 py-2 rounded-lg">
                    Menu
                </button>
            </div>
        </nav>
    );
}
