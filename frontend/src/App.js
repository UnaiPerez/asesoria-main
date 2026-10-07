import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SubirAlCambiarDePagina } from "./components/SubirAlCambiarDePagina";
import { TituloDePagina } from "./components/TituloDePagina";
import { BotonWhatsApp } from "./components/BotonWhatsApp";
import { Home } from "./pages/Home";
import { QuienesSomos } from "./pages/QuienesSomos";
import { Servicios } from "./pages/Servicios";
import { Clientes } from "./pages/Clientes";
import { Contacto } from "./pages/Contacto";
import { Deca } from "./pages/Deca";
import { NoEncontrado } from "./pages/NoEncontrado";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SubirAlCambiarDePagina />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/deca" element={<Deca />} />
          {/* Recoge cualquier dirección que no exista. Hace falta porque el
              servidor manda todas a la aplicación: ver public/.htaccess. */}
          <Route path="*" element={<NoEncontrado />} />
        </Routes>
        <Footer />
        <TituloDePagina />
        <BotonWhatsApp />
      </BrowserRouter>
    </div>
  );
}

export default App;
