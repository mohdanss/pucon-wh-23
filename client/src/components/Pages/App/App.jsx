import AppRouter from "../../router/AppRouter";
import AppStore from "../../redux/store";
import React from "react";

const App = () => {
	return (
		<React.StrictMode>
			<AppStore>
				<AppRouter />
			</AppStore>
		</React.StrictMode>
	);
};

export default App;
