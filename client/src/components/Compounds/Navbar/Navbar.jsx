import React from "react";
import logo from '../../../media/logo.png';

const Navbar = () => {
	return (
		// creating a responsive navbar component, using tailwindcss
		<nav className="flex justify-center items-center w-full bg-gray-900 h-16">
			<div className="w-4/5 h-full flex items-center max-w-screen-xl justify-center">
                <div className="w-1/5 h-full flex items-center justify-start">
                    <a href="/" className="logo">
                        <img src={logo} alt="logo" height={48} width={48}/>
                    </a>
                </div>
                <div className="w-4/5 h-full flex items-center justify-end">
                    <a href="/" className="p-1 mx-2 hover:text-teal-400 transition-colors duration-500">Home</a>
                    <a href="/about" className="p-1 mx-2 hover:text-teal-400 transition-colors duration-500">About</a>
                    <a href="/contact" className="p-1 mx-2 hover:text-teal-400 transition-colors duration-500">Contact</a>
                    <a href="/login" className="p-1 mx-2 text-teal-400 transition-colors duration-500 hover:text-white">Login</a>
                    <a href="/register" className="p-1 mx-2 text-teal-400 transition-colors duration-500 hover:text-white">Register</a>
                </div>
            </div>
		</nav>
	);
};

export default Navbar;
