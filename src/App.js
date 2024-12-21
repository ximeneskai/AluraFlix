import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes'; // Importando o arquivo de rotas
import { CardProvider } from './context/CardContext';

function App() {
  return (
    <CardProvider>
      <BrowserRouter>
        <Header />
        <AppRoutes />  {/* As rotas serão inseridas aqui */}
        <Footer />
      </BrowserRouter>
    </CardProvider>
  );
}

export default App;