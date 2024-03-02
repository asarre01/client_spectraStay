import React from "react";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className=" text-gray-800">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leadi sm:text-6xl">
                        <span className="text-blue-500">Réservez </span>
                        avec aisance, vivez avec élégance.
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">
                        Réservation simplifiée de places de spectacles et
                        d'hôtels,
                        <br className="hidden md:inline lg:hidden" />
                        avec une plateforme offrant un accès facile à des
                        options de taille similaire.
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <Link
                            rel="noopener noreferrer"
                            href="#"
                            className="px-8 py-3 text-lg font-semibold rounded bg-blue-500 text-gray-100"
                        >
                            Voir plus ...
                        </Link>
                    
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img
                        src="assets/travelers.svg"
                        alt=""
                        className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;
