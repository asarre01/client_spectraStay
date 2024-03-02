import React from "react";
import { Link } from "react-router-dom";
import { SiPlanetscale } from "react-icons/si";

function Header() {
    return (
        <header className="p-4 text-gray-800">
            <div className="container flex justify-between h-16 mx-auto">
                <Link
                    to="/"
                    className="flex items-center p-2 text-2xl text-blue-500 font-bold"
                >
                    <SiPlanetscale className="text-4xl mr-2" /> SpectraStay
                </Link>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <Link
                            rel="noopener noreferrer"
                            to="/"
                            className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-blue-500 border-blue-500"
                        >
                            Accueil
                        </Link>
                    </li>
                    <li className="flex">
                        <Link
                            rel="noopener noreferrer"
                            to="/hotels"
                            className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
                        >
                            Hotels
                        </Link>
                    </li>
                    <li className="flex">
                        <Link
                            rel="noopener noreferrer"
                            to="/spectacles"
                            className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
                        >
                            Spectacles
                        </Link>
                    </li>
                    <li className="flex">
                        <Link
                            rel="noopener noreferrer"
                            to="/mesreservations"
                            className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
                        >
                            Mes Réservations
                        </Link>
                    </li>
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex gap-4">
                    <Link
                        to={"/signin"}
                        className="self-center px-8 py-3 font-semibold rounded bg-blue-500 text-gray-100"
                    >
                        Inscription
                    </Link>
                    <Link
                        to={"/login"}
                        className="self-center px-8 py-3 font-semibold rounded bg-blue-500 text-gray-100"
                    >
                        Connexion
                    </Link>
                </div>
                <button className="p-4 lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 text-blue-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </button>
            </div>
        </header>
    );
}

export default Header;
