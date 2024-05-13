import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import UserRouter from "./components/user/UserRouter";
import "./styles/main.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" index element={<UserRouter />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
