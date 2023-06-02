import React from "react";
import reactDom from "react-dom/client";
// import App from "./components/Pages/App/App";
import Test from "./components/Atoms/Test/Test";
import "./index.css";

const root = reactDom.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* <App /> */}
		<Test />
	</React.StrictMode>
);

export default root;
