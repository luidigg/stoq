import { useState } from 'react';
import Header from "../header";
import { Container, Main, Overlay } from "./layoutStyle"; 
import Sidebar from "../sidebar";

function Layout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen((prev) => !prev);
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