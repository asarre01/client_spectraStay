import React from "react";

function Feature() {
    return (
        <section className="text-gray-800">
            <div className="container flex flex-col-reverse mx-auto lg:flex-row">
                <div className="flex flex-col justify-center px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 bg-blue-500 text-gray-100">
                    <div className="flex space-x-2 sm:space-x-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="flex-shrink-0 w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                            ></path>
                        </svg>
                        <div className="space-y-2">
                            <p className="text-lg font-medium leadi">
                                Réservations Simplifiées
                            </p>
                            <p className="leadi">
                                Facilitez vos réservations de chambres d'hôtels
                                et de tickets de spectacles avec notre
                                plateforme conviviale, offrant une expérience
                                simple et rapide.
                            </p>
                        </div>
                    </div>
                    <div className="flex space-x-2 sm:space-x-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="flex-shrink-0 w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                            ></path>
                        </svg>
                        <div className="space-y-2">
                            <p className="text-lg font-medium leadi">
                                Variété de Choix
                            </p>
                            <p className="leadi">
                                Découvrez une variété de chambres d'hôtels et de
                                spectacles exceptionnels, adaptés à tous les
                                goûts et budgets.
                            </p>
                        </div>
                    </div>
                    <div className="flex  space-x-2 sm:space-x-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="flex-shrink-0 w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                            ></path>
                        </svg>
                        <div className="space-y-2">
                            <p className="text-lg font-medium leadi">
                                Expérience Inoubliable
                            </p>
                            <p className="leadi">
                                Offrez-vous une expérience inoubliable en
                                réservant vos chambres d'hôtels et tickets de
                                spectacles avec notre service dédié et fiable.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 xl:w-3/5">
                    <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                        <img
                            src="https://courtier-en-voyages.re/images/mauricesejour/m1.jpg"
                            alt=""
                            className="rounded-lg shadow-lg  aspect-video sm:min-h-96"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Feature;
