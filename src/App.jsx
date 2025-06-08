import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from './pages/Projects';
import About from './pages/About';
import News from './pages/News';
import "aos/dist/aos.css"; // Подключаем AOS для анимаций
import "./index.css"; // Подключаем Tailwind CSS
import Logo from './components/Logo'; // Исправленный импорт
import Footer from './components/footer';
function App() {
  const [showlogotype, setShowlogotype] = useState(true); // Добавлено состояние

  return (
    <Router>
      {showlogotype ? (
        <Logo onComplete={() => setShowlogotype(false)} /> // Исправлено на Logo с заглавной
      ) : (
        <div className="min-h-screen bg-gradient-to-b from-gray-950 to-red-900/20 text-white">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* Комментарий: другие маршруты закомментированы, раскомментируй, когда добавишь страницы */}
              <Route path="/projects" element={<Projects />} />
                 <Route path="/about" element={<About />} />
                 <Route path="/news" element={<News />} />
            </Routes>
          </main>
          <Footer/>
        </div>
      )}
    </Router>
  );
}

export default App;
