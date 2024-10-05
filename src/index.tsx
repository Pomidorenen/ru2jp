import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ProviderTheme} from "./store/themeProvider";
import {ProviderLanguage} from "./store/languageProvider";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <ProviderLanguage>
        <ProviderTheme>
            <App />
        </ProviderTheme>
      </ProviderLanguage>
  </React.StrictMode>
);


