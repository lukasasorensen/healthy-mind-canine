import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import DiyPage from './pages/DiyPage';
import FaqPage from './pages/FaqPage';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import ResourcesPage from './pages/ResourcesPage';
import ServicesPage from './pages/ServicesPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/separation-anxiety" element={<ServicesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/diy" element={<DiyPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
