import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

import Main from "./pages/Main";
import ModelAmg from "./pages/ModelAmg";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/amg" element={<ModelAmg />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
