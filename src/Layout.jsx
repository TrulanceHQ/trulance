import Footer from "./components/Footer";
import Navigation from "./components/Navbar";

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <div className="max-w-[1440px]  mx-auto">
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
