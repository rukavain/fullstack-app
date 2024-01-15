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
                    <Route path="/" Component={Home} />
                    <Route path="/create" Component={Create} />
                    <Route path="/view" Component={View} />
                    <Route path="/update" Component={Update} />
                </Routes>
            </Router>
        </div>
    );
}
