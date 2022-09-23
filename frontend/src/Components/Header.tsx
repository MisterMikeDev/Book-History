import { Link } from "react-router-dom";
import { useNavBar } from "../Hooks/useNavBar";
import RedirectButton from "./RedirectButton";
export default function Header() {
    const { style, toggleNav } = useNavBar();
    return (
        <nav className="bg-white py-2 md:py-4">
            <div className="container px-4 mx-auto md:flex md:items-center">
                <div className="flex justify-between items-center">
                    <Link to="/" className="font-bold text-xl text-indigo-600">
                        Book History
                    </Link>
                    <button
                        className={`border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden`}
                        onClick={toggleNav}
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                </div>

                <div
                    className={`gap-4 md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0 ${style}`}
                >
                    <RedirectButton
                        toggleNav={toggleNav}
                        className="transition text-center p-2 text-white rounded hover:bg-indigo-800 bg-indigo-600"
                        path="/"
                        label="Request List"
                        typeBtn="link"
                    />
                    <RedirectButton
                        toggleNav={toggleNav}
                        className="text-center p-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                        path="/new"
                        label="New Request"
                        typeBtn="link"
                    />
                    <RedirectButton
                        toggleNav={toggleNav}
                        className="text-center p-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                        path="/members"
                        label="Members"
                        typeBtn="link"
                    />
                    <RedirectButton
                        toggleNav={toggleNav}
                        className="text-center p-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                        path="/about"
                        label="About"
                        typeBtn="link"
                    />
                    <RedirectButton
                        toggleNav={toggleNav}
                        className="text-center p-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                        path="https://github.com/MisterMikeDev"
                        label="Developer"
                        typeBtn="anchor"
                    />
                    <RedirectButton
                        toggleNav={toggleNav}
                        className="text-center p-2 text-indigo-600 border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
                        path="/account/login"
                        label="Login"
                        typeBtn="link"
                    />
                </div>
            </div>
        </nav>
    );
}
