import { Link } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
export default function Login(): JSX.Element {
    const INITIAL_STATE = { username: "", password: "" };
    const [userData, setUserData] = useState(INITIAL_STATE);
    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setUserData(INITIAL_STATE);
        globalThis.alert(JSON.stringify(userData));
    };
    return (
        <form
            className="flex flex-col w-1/2 mx-auto mt-20"
            onSubmit={handleSubmit}
        >
            <h5 className="pl-2 font-bold w-96 mx-auto">Username:</h5>
            <input
                type="text"
                name="username"
                value={userData.username}
                maxLength={25}
                required
                placeholder="Username"
                className="mx-auto mb-6 md:w-96 w-full h-12 px-3 rounded-md text-xl p-5 transition border-none"
                onChange={handleChange}
            />
            <h5 className="pl-2 font-bold w-96 mx-auto">Password:</h5>
            <input
                type="password"
                name="password"
                value={userData.password}
                maxLength={25}
                required
                placeholder="Password"
                className="mx-auto mb-4 md:w-96 w-full h-12 px-3 rounded-md text-xl p-5 transition border-none"
                onChange={handleChange}
            />
            <button
                type="submit"
                className="w-32 mb-5 py-3 px-4 mx-auto text-center transition hover:bg-indigo-800 bg-indigo-600 text-white rounded-md text-xl"
            >
                Login
            </button>
            <Link
                to="/account/signup"
                className="text-sm text-center font-bold text-purple-700"
            >
                You still do not have an account? Signup
            </Link>
        </form>
    );
}
