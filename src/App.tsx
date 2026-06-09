import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation, Footer } from './components';
import { HomePage, TechnicalAnalysisPage, FundamentalAnalysisPage, ProjectionPage, CoffeeShopPage, AboutPage } from './pages';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary-950">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/technical" element={<TechnicalAnalysisPage />} />
            <Route path="/fundamental" element={<FundamentalAnalysisPage />} />
            <Route path="/projection" element={<ProjectionPage />} />
            <Route path="/coffee" element={<CoffeeShopPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;