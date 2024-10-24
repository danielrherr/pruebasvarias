import ReactDOM from 'react-dom/client';
import './globals.css'
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from './componentes/themeProvider/themeProvider';
import 'leaflet/dist/leaflet.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.classList.add(savedTheme);
root.render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);

