import React, { useState } from "react";
import { Link } from "react-router-dom";
import validator from "validator";

function Signin() {
    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        email: "",
        password: "",
        cpassword: "",
    });

    const [msg, setMsg] = useState({
        nom: "",
        prenom: "",
        email: "",
        password: "",
        cpassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    function areFieldsNonNull(obj) {
        let newMsg = { ...msg };

        Object.keys(obj).forEach((key) => {
            if (obj[key] === null || obj[key] === "") {
                newMsg = { ...newMsg, [key]: "Champ obligatoire!" };
            } else {
                newMsg = { ...newMsg, [key]: "" };
            }
        });

        setMsg(newMsg);

        return Object.values(obj).every(
            (value) => value !== null && value !== ""
        );
    }

    function validatePassword(password, confirmPassword) {
        if (password !== confirmPassword) {
            setMsg((prevMsg) => ({
                ...prevMsg,
                cpassword: "Les mots de passe ne correspondent pas!",
            }));
            return false;
        } else {
            return true;
        }
    }

    function validateData(formData) {
        let isOk = true;

        if (!areFieldsNonNull(formData)) {
            isOk = false;
        }

        if (!validator.isEmail(formData.email)) {
            setFormData({
                ...formData,
                email: "",
                password: "",
                cpassword: "",
            });
            setMsg((prevMsg) => ({
                ...prevMsg,
                email: "Veuillez entrer une adresse e-mail valide.",
            }));

            isOk = false;
        }

        if (!validatePassword(formData.password, formData.cpassword)) {
            setFormData({
                ...formData,
                password: "",
                cpassword: "",
            });
            isOk = false;
        }

        return isOk;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateData(formData)) {
            return false;
        } else {
            console.log("Formulaire soumis avec succès :", formData);
        }
    };

    return (
        <section className="h-screen w-full flex items-center justify-center">
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-transparent text-gray-800 lg:border lg:border-blue-500 lg:shadow-md">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold text-blue-500">
                        S'inscrire
                    </h1>
                    <p className="text-sm dark:text-gray-400">
                        Sign in to access your account
                    </p>
                </div>
                <form
                    noValidate=""
                    onSubmit={handleSubmit}
                    className="space-y-12"
                >
                    <div>
                        <label htmlFor="nom" className="block mb-2 text-sm">
                            Nom
                        </label>
                        <input
                            type="text"
                            name="nom"
                            id="nom"
                            placeholder="Jenkins"
                            value={formData.nom}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-700 bg-transparent text-gray-800"
                        />
                        <p className="text-red-500 text-xs">{msg.nom}</p>
                    </div>
                    <div>
                        <label htmlFor="prenom" className="block mb-2 text-sm">
                            Prénom
                        </label>
                        <input
                            type="text"
                            name="prenom"
                            id="prenom"
                            placeholder="Jenkins"
                            value={formData.prenom}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-700 bg-transparent text-gray-800"
                        />
                        <p className="text-red-500 text-xs">{msg.prenom}</p>
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="leroy@jenkins.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-700 bg-transparent text-gray-800"
                        />
                        <p className="text-red-500 text-xs">{msg.email}</p>
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm"
                        >
                            Mot de passe
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="*****"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-700 bg-transparent text-gray-800"
                        />
                        <p className="text-red-500 text-xs">{msg.password}</p>
                    </div>
                    <div>
                        <label
                            htmlFor="cpassword"
                            className="block mb-2 text-sm"
                        >
                            Confirmation Mot de passe
                        </label>
                        <input
                            type="password"
                            name="cpassword"
                            id="cpassword"
                            placeholder="*****"
                            value={formData.cpassword}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-700 bg-transparent text-gray-800"
                        />
                        <p className="text-red-500 text-xs">{msg.cpassword}</p>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button
                                type="submit"
                                className="w-full px-8 py-3 font-semibold rounded-md text-gray-100 bg-blue-500"
                            >
                                Valider
                            </button>
                        </div>
                        <p className="px-6 space-x-2 text-sm text-center dark:text-gray-400">
                            <Link
                                to="/"
                                className="hover:underline text-blue-500"
                            >
                                Accueil
                            </Link>
                            <Link
                                to="/Login"
                                className="hover:underline text-blue-500"
                            >
                                S'identifier
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Signin;
