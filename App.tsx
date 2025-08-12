
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { PropertiesPage } from './pages/PropertiesPage';
import { InterestFormPage } from './pages/InterestFormPage';

function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/properties" element={<PropertiesPage />} />
            <Route path="/form/:propertyId" element={<InterestFormPage />} />
          </Routes>
        </Layout>
      </HashRouter>
    </LanguageProvider>
  );
}

export default App;
