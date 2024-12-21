import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import NewVideo from './pages/NewVideo';
import AppRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Home />
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
