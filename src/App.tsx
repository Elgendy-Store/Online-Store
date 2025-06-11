import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { BudgetProvider } from './context/BudgetContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import BudgetPage from './pages/BudgetPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import SearchResultsPage from './pages/SearchResultsPage';
import ScrollToTop from './components/ScrollToTop'; //asharmota!!

function App() {
  return (
    <Router basename="/Online-Store">
      <BudgetProvider>
        <div className="flex flex-col min-h-screen">
          <ScrollToTop /> {}
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories/:id" element={<CategoryPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/budget" element={<BudgetPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/search" element={<SearchResultsPage />} />
            <Route path="/Online-Store" element={<Navigate to="/" replace />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
          <Footer />
        </div>
      </BudgetProvider>
    </Router>
  );
}

export default App;