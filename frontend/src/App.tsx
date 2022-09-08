import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Header from "./Components/Header";
import Home from "./Components/Home";
import "./Global.scss";
createRoot(document.getElementById("main") as HTMLElement).render(
    <BrowserRouter>
        <Header />
        <div className="AppCenter">
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    </BrowserRouter>
);
