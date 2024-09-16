import Footer from "./components/Footer";
import Navigation from "./components/Navbar";

// eslint-disable-next-line react/prop-types
export default function Layout({children}) {
    return (
        <div>
            <header>
                <Navigation />
            </header>
            <main className="">{children}</main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
