import { ToastContainer } from "react-toastify";
import SeeMessages from "./components/SeeMessages";
import SendMessages from "./components/SendMessage";
import "./index.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" Component={SendMessages} />
          <Route path="/xL3iX88dT0LBo6ody95qU" Component={SeeMessages} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
