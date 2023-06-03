import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/authActions";

const Login = (props) => {
	const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(login({ email: "abc", password: "123" }));
    }

	return (
		<div className="flex w-full h-full bg-slate-500">
			<button onClick={handleLogin} className="p-2 bg-teal-500 hover:bg-teal-600 transition-colors duration-500">Login</button>
            
		</div>
	);
};

export default Login;
