import "./App.css";
import User from "./components/user";
import { Provider } from "react-redux";
import store from "./redux/store";
import UserForm from "./components/userForm";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>User Profile</h1>
        <User />
        <UserForm />
      </div>
    </Provider>
  );
}

export default App;
