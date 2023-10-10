import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home/home";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/home" element={<Home />} />
    </BrowserRouter>
  );
}

export default App;
