import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function PrivatePage({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}