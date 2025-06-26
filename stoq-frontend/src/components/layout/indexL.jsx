import { useState, useEffect } from 'react';
import Header from "../header";
import { Container, Main, Overlay } from "./layoutStyle"; 
import Sidebar from "../sidebar";

function Layout({ children }) {
  // Estado para controlar sidebar aberto ou fechado
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Ajusta sidebarOpen ao carregar e ao redimensionar a janela
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) { // breakpoint mobile (ajuste conforme seu design)
        setSidebarOpen(false); // fecha sidebar no mobile
      } else {
        setSidebarOpen(true); // abre sidebar no desktop
      }
    }

    handleResize(); // executa ao montar o componente
    window.addEventListener('resize', handleResize);

    // Remove listener ao desmontar o componente
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Alterna o estado sidebarOpen
  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  return (
    <Container>
      {sidebarOpen && <Overlay onClick={toggleSidebar} />}

      <Header onToggleSidebar={toggleSidebar} />

      <Sidebar isOpen={sidebarOpen} />

      <Main isOpen={sidebarOpen}>
        {children}
      </Main>
    </Container>
  )
}

export default Layout;