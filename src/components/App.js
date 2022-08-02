import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../assets/styles/GlobalStyle";
import Login from "./Login/Login";
import Registration from "./Registration/Registration";
import Habits from "./Habits/Habits";

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Registration />} />
                <Route path="/habitos" element={<Habits />} />
            </Routes>
        </BrowserRouter>
    );
}