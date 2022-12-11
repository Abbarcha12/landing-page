
import './App.css';
import Gallery from './components/Gallery';
import AboutUs from './components/AboutUs';
import TeamContact from './components/TeamContact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


// import Header from './components/Header';
// import SpinnerButtons from './components/SpinnerButtons';
// import PersistentDrawerLeft from './components/sidebar';

function App() {
  return (
    <div className="App">
        {/* <Header />
        <SpinnerButtons /> */}
        {/* <PersistentDrawerLeft /> */}
        <Navbar />
        <Gallery />
        <AboutUs />
        <TeamContact />
        <Footer />
    </div>
  );
}

export default App;
