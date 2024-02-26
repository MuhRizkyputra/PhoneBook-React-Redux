import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import './App.css';
import PhoneBox from "./components/PhoneBox";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PhoneBox />} />
        </Routes>
      </Router>
    </>
  );
}