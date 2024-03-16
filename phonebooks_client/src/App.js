import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import './App.css';
import PhoneBox from "./components/PhoneBox";
import FormAdd from "./components/FormAdd";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PhoneBox />} />
          <Route path="/add" element={<FormAdd/>}/>
        </Routes>
      </Router>
    </>
  );
}