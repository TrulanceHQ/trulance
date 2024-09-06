import Footer from "./Footer";
import Navigation from "./Navbar";


// eslint-disable-next-line react/prop-types
export default function Layout ({ children }) {
    return (
        <div>
            <header>
                <Navigation  />
            </header>
            <main className="">  
                {children}
            </main>
            <footer>
               <Footer />
            </footer>
        </div>
    )
}