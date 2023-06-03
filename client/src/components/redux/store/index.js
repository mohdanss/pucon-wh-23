// redux store creation
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "../reducers/authReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

const AppStore = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};

export default AppStore;
