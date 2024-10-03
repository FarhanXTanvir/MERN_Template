import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./fontawesome";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Hello World!</h1>} />
        <Route path="/bye" element={<h1>Bye Bye!</h1>} />
      </Routes>
    </Router>
  );
}
