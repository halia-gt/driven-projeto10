import { Navigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function PrivatePage({ children }) {
    const auth = JSON.parse(localStorage.getItem("trackit"));

    if (auth) {
        return (
            <>
                <Header image={auth.image} />
                    {children}
                <Footer />
            </>
        )
    } else {
        return <Navigate to="/" />
    }
}