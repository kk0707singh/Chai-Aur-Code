import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://img.freepik.com/premium-vector/cartoon-man-with-glasses-laptop-with-laptop-front-him_120309-123.jpg?w=2000"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                         React development is driven by a community of passionate developers who are dedicated to enhancing and expanding its capabilities.
                         As an open-source library, React benefits from continuous contributions from developers around the world,
                         fostering innovation and collaboration. Its component-based architecture allows for reusable and maintainable code,
                         which significantly improves development efficiency.
                         Developers are constantly working on introducing advanced features,
                         such as Hooks, Concurrent Mode, and Server Components, to keep React at the cutting edge of modern web development.
                         Additionally, the ecosystem around React is enriched by a wide array of tools, libraries, and extensions,
                         such as Redux and React Router, which simplify development and extend its functionality.
                         This collective effort ensures that React remains a powerful and versatile tool for creating scalable and interactive user interfaces.
                        </p>
                        <p className="mt-4 text-gray-600 font-bold">
                        React thrives due to global developer contributions, 
                        enhancing its features and ecosystem. Its component-based architecture promotes reusability and maintainability.
                        Innovations like Hooks and Server Components keep it at the forefront of web development,
                        while its active community ensures React stays a versatile tool for building interactive UIs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}