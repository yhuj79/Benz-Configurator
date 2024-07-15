import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import UseScrollToTop from "./hooks/useScrollToTop";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

import Main from "./pages/Main";
import Configuration from "./pages/Configuration";

function App() {
  return (
    <Router>
      <UseScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/configuration/:name" element={<Configuration />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
