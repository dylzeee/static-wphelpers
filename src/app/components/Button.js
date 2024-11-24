export default function Button({ children, variant = 'primary' }) {
    const baseStyle = 'px-6 py-3 rounded-lg font-semibold transition-all';
    const variants = {
        primary: 'bg-lightBlue text-white hover:bg-blue-500',
        secondary: 'bg-white text-trustworthyBlue hover:bg-gray-100',
    };

    return <button className={`${baseStyle} ${variants[variant]}`}>{children}</button>;
}
