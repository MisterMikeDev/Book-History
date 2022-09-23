import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequestList from "./Pages/RequestList";
import Login from "./Pages/Login";
import UserContext from "./Context/DataContext";
import Header from "./Components/Header";
import { useApi } from "./Hooks/useApi";
export default function App() {
    const { response } = useApi();
    return (
        <UserContext.Provider value={response}>
            <BrowserRouter>
                <Header />
                <div className="App bg-indigo-100 py-6 md:py-12 h-full">
                    <Routes>
                        <Route path="/" element={<RequestList />} />
                        <Route path="/account/login" element={<Login />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </UserContext.Provider>
    );
}
