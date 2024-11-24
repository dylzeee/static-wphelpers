import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'WP Helpers',
  description: 'Helping Businesses Succeed Online',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <main className="max-w-full mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
