import React from "react";
import { Link } from "react-router-dom";
function Login() {
    
    return (
        <section className=" h-screen w-full flex items-center justify-center">
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-transparent text-gray-800 lg:border lg:border-blue-500 lg:shadow-md">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold text-blue-500">
                        S'identifier
                    </h1>
                    <p className="text-sm dark:text-gray-400">
                        Sign in to access your account
                    </p>
                </div>
                <form novalidate="" action="" className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label for="email" className="block mb-2 text-sm">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="leroy@jenkins.com"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 bg-transparent text-gray-800"
                            />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label for="password" className="text-sm">
                                    Mot de passe
                                </label>
                            </div>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="*****"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 bg-transparent text-gray-800"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button
                                type="button"
                                className="w-full px-8 py-3 font-semibold rounded-md text-gray-100 bg-blue-500"
                            >
                                S'inscrire.
                            </button>
                        </div>
                        <p className="px-6 space-x-2 text-sm text-center dark:text-gray-400">
                            <Link
                                to="/"
                                className="hover:underline text-blue-500 "
                            >
                                Accueil
                            </Link>
                            <Link
                                to="/signin"
                                className="hover:underline text-blue-500 "
                            >
                                S'inscrire
                            </Link>
                            .
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Login;
