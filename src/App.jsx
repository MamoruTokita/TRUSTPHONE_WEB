import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './assets/components/Layout';
import Home from './assets/pages/Home';
import Catalogo from './assets/pages/Catalogo';
import Carrito from './assets/pages/Carrito';
import Contacto from './assets/pages/Contacto';
import Login from './assets/pages/Login';
import Register from './assets/pages/Register';
import Perfil from './assets/pages/Perfil';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalogo" element={<Catalogo />} />
          <Route path="carrito" element={<Carrito />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="perfil" element={<Perfil />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App