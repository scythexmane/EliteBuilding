import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const handleNavClick = (path) => {
    if (path.startsWith("#")) {
      const target = document.querySelector(path);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { path: "/", name: t("nav.home") },
    { path: "/projects", name: t("nav.projects") },
    { path: "/about", name: t("nav.about") },
    { path: "/news", name: t("nav.news") },
    { path: "#footer", name: t("nav.contacts") },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-950 bg-opacity-95 backdrop-blur-sm text-white z-50 shadow-[0_4px_10px_rgba(255,255,255,0.1)]">
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        {/* Логотип */}
        <div
          className="text-3xl font-extrabold tracking-tight text-amber-400"
          data-aos="fade-in"
        >
          <Link to="/">EliteBuild</Link>
        </div>

        {/* Навигация */}
        <nav className="hidden md:flex space-x-10 items-center">
          {navItems.map((item, i) =>
            item.path.startsWith("#") ? (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className="text-base font-semibold text-gray-200 hover:text-amber-400 relative group transition-all duration-300"
                data-aos="fade-in"
                data-aos-delay={i * 100}
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300 ease-in-out" />
              </button>
            ) : (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-base font-semibold relative group transition-all duration-300 ${
                    isActive ? "text-amber-400" : "text-gray-200"
                  }`
                }
                data-aos="fade-in"
                data-aos-delay={i * 100}
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300 ease-in-out" />
              </NavLink>
            )
          )}

          {/* Соцсети */}
          <div
            className="flex space-x-4 ml-6"
            data-aos="fade-in"
            data-aos-delay="500"
          >
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-white hover:text-amber-400 transition duration-300 text-lg" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white hover:text-amber-400 transition duration-300 text-lg" />
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane className="text-white hover:text-amber-400 transition duration-300 text-lg" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-white hover:text-amber-400 transition duration-300 text-lg" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-white hover:text-amber-400 transition duration-300 text-lg" />
            </a>
          </div>
        </nav>

        {/* Язык + Телефон + Бургер */}
        <div className="flex items-center space-x-6">
          {/* Телефон */}
          <a
            href="tel:+998781228822"
            className="hidden md:block text-amber-400 font-bold text-lg hover:underline transition duration-300"
            data-aos="fade-in"
            data-aos-delay="600"
          >
            +998 78 122 88 22
          </a>

          {/* Языки */}
          {["ru", "en"].map((lang) => (
            <button
              key={lang}
              onClick={() => changeLanguage(lang)}
              className="text-sm font-semibold text-gray-200 hover:text-amber-400 hover:scale-105 transition-all duration-300"
              data-aos="fade-in"
            >
              {lang.toUpperCase()}
            </button>
          ))}

          {/* Бургер */}
          <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
            <svg
              className="w-8 h-8 text-amber-400 hover:scale-105 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile меню */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700">
          <nav className="flex flex-col items-center py-4 space-y-4">
            {navItems.map((item, i) =>
              item.path.startsWith("#") ? (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className="text-lg font-semibold text-gray-200 hover:text-amber-400 transition-all duration-300"
                >
                  {item.name}
                </button>
              ) : (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `text-lg font-semibold transition-all duration-300 ${
                      isActive ? "text-amber-400" : "text-gray-200"
                    } hover:text-amber-400`
                  }
                >
                  {item.name}
                </NavLink>
              )
            )}
            {/* Телефон дублируем на мобилке */}
            <a
              href="tel:+998781228822"
              className="text-amber-400 font-semibold text-lg"
            >
              +998 78 122 88 22
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
