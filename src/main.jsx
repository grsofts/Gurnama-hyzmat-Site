import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router';

import "./utils/language/i18n.js";
import { LanguageProvider } from './utils/language/LanguageProvider.jsx';


// eslint-disable-next-line react-refresh/only-export-components
const Root = () => {
  return (
      <App />
  );
};


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <Root />
      </LanguageProvider>
    </BrowserRouter>
    
  </StrictMode>,
)
