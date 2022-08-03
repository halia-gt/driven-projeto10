import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../assets/styles/GlobalStyle";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import Habits from "./Habits/Habits";
import Today from "./Today/Today";
import History from "./History/History";
import UserContext from "../context/UserContext";
import PrivatePage from "./PrivatePage/PrivatePage";

export default function App() {
    const [user, setUser] = useState('');

    return (
        <BrowserRouter>
            <GlobalStyle />
            <UserContext.Provider value={{ user, setUser }}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<SignUp />} />
                    <Route path="/habitos" element={
                            <PrivatePage>
                                <Habits />
                            </PrivatePage>
                        }
                    />
                    <Route path="/hoje" element={
                            <PrivatePage>
                                <Today />
                            </PrivatePage>
                        }
                    />
                    <Route path="/historico" element={
                            <PrivatePage>
                                <History />
                            </PrivatePage>
                        }
                    />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    );
}