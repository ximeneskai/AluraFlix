import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes'; // Importando o arquivo de rotas

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />  {/* As rotas serão inseridas aqui */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;