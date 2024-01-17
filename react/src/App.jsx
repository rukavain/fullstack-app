import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Update from "./Pages/Update.jsx";
import View from "./Pages/View.jsx";
import Create from "./Pages/Create.jsx";
import Home from "./Pages/Home.jsx";

export default function App() {
    return (
        <div className="flex justify-center items-center my-6">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/view" element={<View />} />
                    <Route path="/update/:id" element={<Update />} />
                </Routes>
            </Router>
        </div>
    );
}
