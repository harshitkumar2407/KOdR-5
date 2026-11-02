
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ContextProvider } from './context/MyContext.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(
    <ContextProvider>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </ContextProvider>
);
