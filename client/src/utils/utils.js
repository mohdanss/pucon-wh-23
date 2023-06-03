import axios from "axios";

export const API_SERVER = "https://pucon-23-wh-server.herokuapp.com";
export const LOCAL_API_SERVER = "http://localhost:5000";

export const checkBackendConnection = async () => {
	try {
		const res = await axios.get(`${API_SERVER}/api/test/`);
		return [true, res?.data.message];
	} catch (err) {
		if (err.response) {
			// The request was made and the server responded with a status code
			return [false, err.response.data];
		} else if (err.request) {
			// The request was made but no response was received
			return [false, "No response received"];
		} else {
			// Something happened in setting up the request that triggered an error
			return [false, err.message];
		}
	}
};