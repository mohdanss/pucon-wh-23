import axios from "axios";
import { API_SERVER } from "../../../utils/utils";

// action types
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

// action creators
export const login = (credentials) => {
	return async (dispath) => {
		// Login API request
		try {
            if(credentials.email === "abc" && credentials.password === "123"){
                const response = {
                    data: {
                        user: {
                            email: "abc",
                            password: "123"
                        }
                    }
                }
                dispath({ type: LOGIN_SUCCESS, payload: response.data });
            }else{
                dispath({ type: LOGIN_FAILURE, payload: "Invalid credentials" });
            }
			// const response = await axios.post(
			// 	`${API_SERVER}/api/user/login`,
			// 	credentials
			// );
			// dispath({ type: LOGIN_SUCCESS, payload: response.data });
		} catch (err) {
			dispath({ type: LOGIN_FAILURE, payload: err.response?.data });
		}
	};
};

export const register = (credentials) => {
	return async (dispath) => {
		// Register API request
		try {
			const response = await axios.post(
				`${API_SERVER}/api/user/register`,
				credentials
			);
			dispath({ type: LOGIN_SUCCESS, payload: response.data });
		} catch (err) {
			dispath({ type: LOGIN_FAILURE, payload: err.response?.data });
		}
	};
};
