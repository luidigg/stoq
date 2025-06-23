import { useState } from 'react';
import Header from "../header";
import { Container, Main, Content } from "./layoutStyle";
import Sidebar from "../sidebar";


function Layout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => {
        setSidebarOpen((prev) => !prev);
    };

    return (
        <Container>
            <Header onToggleSidebar={toggleSidebar} />
            <Content isOpen={sidebarOpen}>
                <Sidebar isOpen={sidebarOpen} />
                <Main isOpen={sidebarOpen}>
                    {children}
                </Main>
            </Content>
        </Container>
    )
}

export default Layout;