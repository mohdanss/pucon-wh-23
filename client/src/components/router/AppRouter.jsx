import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
    Outlet
} from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Landing from "../Pages/Landing/Landing";

const PrivateRoute = () => {
    const isAuthenticated = false;
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" /> 
};


// how to setup 404 route
const NoMatch = () => {
	return <h1>404</h1>;
};

const AppRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" Component={Landing}/>
				<Route path="/login" Component={Login} />
				<Route path="/register" Component={Register} />
				<Route path="/home" element={<PrivateRoute />} >
                    <Route path="/home" Component={Home} />
                </Route>
				<Route path="*" element={<NoMatch />} />
			</Routes>
		</Router>
	);
};

export default AppRouter;
