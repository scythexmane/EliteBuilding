// src/components/Footer.jsx
import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF,
  FaTelegramPlane,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  const branches = [
    "ул. Афросиаб, 23А",
    "ул. Амира Темура, 51",
    "ул. Шота Руставели, 12",
    "просп. Мукими, 88",
    "ул. Буюк Ипак Йули, 19",
  ];

  const socialIcons = [
    { icon: <FaTelegramPlane />, href: "https://t.me/yourcompany" },
    { icon: <FaInstagram />, href: "https://instagram.com/yourcompany" },
    { icon: <FaFacebookF />, href: "https://facebook.com/yourcompany" },
    {
      icon: <FaLinkedinIn />,
      href: "https://linkedin.com/company/yourcompany",
    },
  ];

  return (
    <footer id="footer"
      className="relative bg-gray-950 text-white pt-20 pb-10 px-6 md:px-16 overflow-hidden"
      style={{
        backgroundImage: "url('https://wallpapers.com/images/hd/blue-marble-1920-x-1080-wallpaper-zz4u51hcokbczc5v.jpg')", // ← путь к вашему фону
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/80 z-0" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {/* Левая колонка: офисы и контакты */}
        <div>
          <h3 className="text-xl text-amber-400 font-bold mb-4">
            {t("footer.branchesTitle")}
          </h3>
          <ul className="space-y-3">
            {branches.map((addr, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300">
                <FaMapMarkerAlt className="mt-1 text-amber-500" />
                <a
                  href={`https://maps.google.com?q=${encodeURIComponent(addr)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition"
                >
                  {addr} —{" "}
                  <span className="underline">{t("footer.getDirections")}</span>
                </a>
              </li>
            ))}
            <li className="flex items-center gap-3 mt-6 text-gray-300">
              <FaPhoneAlt className="text-amber-500" />
              <a href="tel:+998901234567" className="hover:text-amber-400">
                +998 90 123 45 67
              </a>
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <FaEnvelope className="text-amber-500" />
              <a
                href="mailto:info@yourcompany.uz"
                className="hover:text-amber-400"
              >
                info@yourcompany.uz
              </a>
            </li>
          </ul>

          {/* Соцсети */}
          <div className="flex space-x-4 mt-8">
            {socialIcons.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-400 transition text-lg"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Центр: ссылки */}
        <div>
          <h3 className="text-xl text-amber-400 font-bold mb-4">
            {t("footer.linksTitle")}
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="/" className="hover:text-amber-400">
                {t("footer.home")}
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-amber-400">
                {t("footer.about")}
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:text-amber-400">
                {t("footer.projects")}
              </a>
            </li>
            <li>
              <a href="/news" className="hover:text-amber-400">
                {t("footer.news")}
              </a>
            </li>
          </ul>
        </div>

        {/* Правая колонка: Google-карта */}
        <div className="md:col-span-1">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-700">
            <iframe
              title="Google Maps"
              src="https://maps.google.com/maps?q=Tashkent&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-64 md:h-72"
              loading="lazy"
              style={{ minHeight: "250px" }}
            />
          </div>
        </div>
      </div>

      {/* Нижняя часть: график работы */}
      <div className="relative z-10 text-center mt-14 border-t border-gray-700 pt-6 text-sm text-gray-400">
        <p>{t("footer.hours")}: 09:00 – 19:00 (Пн–Сб)</p>
        <p className="mt-1">
          © {new Date().getFullYear()} YourCompany. {t("footer.rightsReserved")}
        </p>
      </div>
    </footer>
  );
}
