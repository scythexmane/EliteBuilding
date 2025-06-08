import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// -----------------------------------------------------------------------------
// ⚡️ AboutPage (mobile‑first)
// • Сохраняем существующую центральную зиг‑линию (ничего в ней не меняем)
// • Делаем адаптив: single‑column <640px, аккуратные отступы, no overflow
// • Добавляем кнопку «На главную» (i18n) внизу
// -----------------------------------------------------------------------------

const timeline = [
  {
    year: "2003",
    text: "about.timeline.2003",
    image:
      "https://mbc.uz/storage/histories/5961cb5b-0070-49a8-a906-e29d7014e62d.webp",
  },
  {
    year: "2005",
    text: "about.timeline.2005",
    image:
      "https://mbc.uz/storage/histories/945014d7-713c-4fe9-8079-980f98c71c44.webp",
  },
  {
    year: "2008",
    text: "about.timeline.2008",
    image:
      "https://mbc.uz/storage/histories/427ab856-f8c6-48f4-b269-ba46843a7a95.webp",
  },
  {
    year: "2012",
    text: "about.timeline.2012",
    image:
      "https://mbc.uz/storage/histories/9c07c019-c26c-4313-89a0-5f36b5804278.webp",
  },
  {
    year: "2015",
    text: "about.timeline.2015",
    image:
      "https://mbc.uz/storage/histories/f92284bc-4ae7-4326-b010-89f5de3536cb.webp",
  },
  {
    year: "2018",
    text: "about.timeline.2018",
    image:
      "https://mbc.uz/storage/histories/7f841937-e818-49ca-b4ff-2be551554534.webp",
  },
  {
    year: "2020",
    text: "about.timeline.2020",
    image:
      "https://mbc.uz/storage/histories/2514b477-42d5-4823-a3ba-2023119e9ab0.webp",
  },
  {
    year: "2023",
    text: "about.timeline.2023",
    image:
      "https://mbc.uz/storage/histories/f68c0b19-5c96-44e7-9b34-aa271e035c75.webp",
  },
];

// ---------------------------- Central golden path (unchanged) ---------------
const TimelineLine = React.forwardRef((_, ref) => (
  <svg
    className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-20 hidden md:block pointer-events-none"
    viewBox="0 0 60 2000"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      ref={ref}
      d="M30 0 Q60 100 30 200 Q0 300 30 400 Q60 500 30 600 Q0 700 30 800 Q60 900 30 1000 Q0 1100 30 1200 Q60 1300 30 1400 Q0 1500 30 1600 Q60 1700 30 1800 Q0 1900 30 2000"
      stroke="#D4AF37"
      strokeWidth="4"
      fill="none"
    />
  </svg>
));

export default function AboutPage() {
  const { t } = useTranslation();
  const pathRef = useRef(null);
  const sectionRef = useRef(null);

  // --------------------------- AOS + scroll drawing --------------------------
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const path = pathRef.current;
    const section = sectionRef.current;
    if (!path || !section) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    const handleScroll = () => {
      const { top, height } = section.getBoundingClientRect();
      const winH = window.innerHeight;
      const progress = Math.min(Math.max((winH - top) / (height + winH), 0), 1);
      path.style.strokeDashoffset = `${length * (1 - progress)}`;
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const marble =
    "bg-[url('https://wallpapers.com/images/hd/blue-marble-1920-x-1080-wallpaper-zz4u51hcokbczc5v.jpg')] bg-cover bg-center";

  // ---------------------------------------------------------------------------
  return (
    <main className="bg-gray-950 text-white overflow-x-hidden">
      {/* ------------------------------ Hero --------------------------------- */}
      <section className={`relative pt-28 pb-20 px-4 text-center ${marble}`}>
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-amber-400 leading-tight"
            data-aos="zoom-in"
          >
            {t("about.welcome")}
          </h1>
        </div>
      </section>

      {/* --------------------------- About section --------------------------- */}
      <section className={`relative py-24 px-6 md:px-12 lg:px-20 ${marble}`}>
        <div className="absolute inset-0 bg-black/85" />
        <div className="relative z-10 max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-6 text-base sm:text-lg leading-relaxed" data-aos="fade-right">
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-400">
              {t("about.title")}
            </h2>
            <p>{t("about.description1")}</p>
            <p>{t("about.description2")}</p>
          </div>
          <div data-aos="fade-left">
            <img
              src="https://ined1.kz/novostroyka/imgtovar/020220615091941.jpg"
              alt="Murad Buildings Founder"
              loading="lazy"
              className="w-full rounded-2xl shadow-2xl object-cover h-64 sm:h-80 lg:h-full"
            />
          </div>
        </div>
      </section>

      {/* -------------------------- Timeline section ------------------------- */}
      <section
        ref={sectionRef}
        className="relative py-24 md:py-32 bg-[#08122F] text-amber-400 overflow-hidden"
      >
        <TimelineLine ref={pathRef} />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 space-y-36 md:space-y-48 lg:space-y-60">
          {timeline.map((e, idx) => {
            const reverse = idx % 2 !== 0;
            return (
              <article
                key={e.year}
                className={`flex flex-col md:flex-row items-center gap-8 sm:gap-10 ${
                  reverse ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* photo */}
                <figure
                  className="w-full md:w-1/2"
                  data-aos={reverse ? "fade-left" : "fade-right"}
                >
                  <div className="transform rotate-1 md:rotate-[1deg] -rotate-[1deg] transition-transform duration-700 hover:scale-[1.05]">
                    <img
                      src={e.image}
                      alt={e.year}
                      loading="lazy"
                      className="w-full rounded-3xl shadow-xl object-cover h-56 sm:h-64 md:h-[400px]"
                    />
                  </div>
                </figure>

                {/* text */}
                <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-amber-400">
                    {e.year}
                  </h3>
                  <span className="block h-1 w-14 mx-auto md:mx-0 bg-amber-400 rounded-full" />
                  <p className="max-w-md mx-auto md:mx-0 text-sm sm:text-base text-white">
                    {t(e.text)}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ------------------------------ CTA ---------------------------------- */}
  
    </main>
  );
}
