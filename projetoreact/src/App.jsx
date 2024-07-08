import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Galeria from "./components/Galeria"; 
import "./App.css";

function App() {
    return (
        <div id="root">
            <Navbar />
            <main>
                <Banner />
                <div className="App">
                    <Galeria /> 
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;
