import 'swiper/swiper.min.css';
import '~/assets/boxicons-2.1.4/css/boxicons.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Routess from './config/Routes';

function App() {
    return (
        <Router className="App">
            <Routes>
                <Route
                    path="*"
                    element={
                        <>
                            <Header />
                            <Routess />
                            <Footer />
                        </>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
