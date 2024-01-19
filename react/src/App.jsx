import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Update from "./Pages/Update.jsx";
import View from "./Pages/View.jsx";
import Create from "./Pages/Create.jsx";
import Home from "./Pages/Home.jsx";
import ViewSong from "./Pages/ViewSong.jsx";
import Deleted from "./notifications/Deleted.jsx";
import Updated from "./notifications/Updated.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
    return (
        <>
            <main className="bg-slate-100">
                <Navbar />
                <div className="flex justify-center items-center">
                    <Router>
                        <Routes>
                            <Route path="/" element={<View />} />
                            <Route path="/deleted" element={<Deleted />} />
                            <Route path="/updated" element={<Updated />} />
                            <Route path="/create" element={<Create />} />
                            <Route
                                path="/viewsong/:id"
                                element={<ViewSong />}
                            />
                            <Route path="/update/:id" element={<Update />} />
                        </Routes>
                    </Router>
                </div>
                <Footer />
            </main>
        </>
    );
}
