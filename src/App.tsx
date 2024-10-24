
import Sidebar from './componentes/dashboard/sidebar/sidebar';
import styles from './componentes/dashboard/dashboard.module.scss';
import Footer from './componentes/dashboard/footer/footer';
import NavBar from './componentes/dashboard/navbar/navbar';
import { Routes, Route, useLocation } from 'react-router-dom';
import ProtectedRoute from './pages/protectedRoute/protectedRoute';
import Dashboard from './pages/dashboard/dashboard';
import { useTheme } from './componentes/themeProvider/themeProvider';
import { useEffect, useState } from 'react';
import MapaPage from './pages/mapas/mapaPage';

interface AppProps {
  children?: React.ReactNode
}

function App() {
  const { isDarkMode } = useTheme();
  const location = useLocation();

  useEffect(() => {
    // Sincronizar el tema con la clase del body cuando cambie el estado de `isDarkMode`
    document.body.classList.toggle('dark', isDarkMode);
    document.body.classList.toggle('light', !isDarkMode);
  }, [isDarkMode, location]);
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <NavBar />
        <div>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/mapa" element={<MapaPage/>} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
