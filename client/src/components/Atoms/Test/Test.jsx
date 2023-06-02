import React, { useEffect, useState } from "react";
import { checkBackendConnection } from "../../../utils/utils";

const Test = () => {
	const [backendConnected, setBackendConnected] = useState(false);
	const [message, setMessage] = useState("waiting for backend connection...");

	useEffect(() => {
		checkBackendConnection()
			.then((res) => {
				const [flag, message] = res;
				setBackendConnected(flag);
				setMessage(message);
			})
			.catch((err) => {
				console.error(err);
				setMessage(err);
				setBackendConnected(false);
			});
	}, []);

	return (
		<div style={styles.center}>
			<h1>Test</h1>
			<p>
				Connection Status: {backendConnected ? "Connected" : "Not Connected"}
			</p>
			<p>Message: {message}</p>
		</div>
	);
};

const styles = {
	center: {
		textAlign: "center",
        color: "red",
	},
};

export default Test;
