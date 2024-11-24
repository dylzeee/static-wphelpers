"use client"

import { useEffect, useState } from "react";

function Counter({ end }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = end / 100;

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                clearInterval(timer);
                start = end;
            }
            setCount(Math.ceil(start));
        }, 20);

        return () => clearInterval(timer);
    }, [end]);

    return <p className="text-5xl font-bold text-lightBlue">{count}+</p>;
}

export default function StatisticsSection() {
    const stats = [
        { value: 500, description: "Websites Maintained" },
        { value: 99.9, description: "Uptime Guaranteed" },
        { value: 24, description: "Support Availability" },
        { value: 200, description: "Traffic Growth for Clients" },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-trustworthyBlue">By the Numbers</h2>
                <p className="mt-4 text-lg text-gray-600">
                    We deliver measurable results for businesses of all sizes.
                </p>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-gray-100 shadow-lg rounded-lg p-6 text-center">
                            <Counter end={stat.value} />
                            <p className="mt-4 text-gray-600">{stat.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
