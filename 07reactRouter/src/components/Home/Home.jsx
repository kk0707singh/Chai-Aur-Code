import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Krishna Kant Singh
                            <span className="hidden sm:block text-4xl">React Developer</span>
                        </h2>

                        <p> I am a motivated individual seeking a challenging role within an organization where I can utilize my technical skills and
                            personal attributes to contribute to its growth while enhancing my own professional development. With a fresh perspective
                            and a willingness to learn, I aim to actively engage in problem-solving and innovation, fostering a collaborative environment
                            that drives success for both myself and the organization.</p>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/"
                        >

                            &nbsp; For More Info
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src="https://png.pngtree.com/png-clipart/20230818/original/pngtree-gamer-in-front-of-computer-isolated-on-white-background-picture-image_8034542.png" alt="image1" />
                </div>
            </aside>

            


            <div className="flex items-center sm:mt-20">
                    <div className="flex-1 p-4">
                        <p className="text-lg">
                         A landing page built using React is a single-page application designed to present key information
                        and encourage user actions like sign-ups or purchases.
                        React simplifies the creation of such pages with reusable components,
                        seamless state management, and interactive UIs
                        </p>
                </div>

                <div className="flex-1 grid place-items-center">
                    <img
                     className="sm:w-96 w-48"
                      src="https://img.freepik.com/premium-vector/o-futuro-campeo-de-esports-que-comeou-cedo09_782430-3.jpg"
                      alt="image2"
                    />
                </div>
            </div>


            <h3 className="text-center text-2xl sm:text-5xl py-10 font-medium">For more move Forword</h3>
        </div>
    );
}