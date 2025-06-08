import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

const projects = [
  {
    title: "TABIAT RESIDENCE",
    status: "soon",
    class: "business",
    address: "г. Ташкент, Мирзо-Улугбекский район, махалля Геофизика",
    date: "",
    image:
      "https://avatars.mds.yandex.net/i?id=f17a69fc687c8fed7e764807c572f3fee233b2c1-12387240-images-thumbs&n=13",
  },
  {
    title: "SAADIYAT",
    status: "on_sale",
    class: "business",
    address:
      "г. Ташкент, Мирзо-Улугбекский р-н, пересечение ул. Катта Дархан и Аккурганская",
    date: "2027",
    image:
      "https://www.mbc.uz/storage/archs/0d32152b-dd68-4fb5-8a85-d0d22d68ec60.webp",
  },
  {
    title: "C1",
    status: "on_sale",
    class: "premium",
    address: "г. Ташкент, Яшнабадский р-н, ул. С. Азимова 46А",
    date: "2027",
    image: "https://src.marketplace.uysot.uz/image/Q4B4dQn4f5s8bTBqDA4Z.webp",
  },
  {
    title: "ORIENT TOWER",
    status: "soon",
    class: "premium",
    address: "г. Ташкент, Юнусабадский р-н, пр-т Амира Темура 15",
    date: "",
    image:
      "https://www.theconstructionindex.co.uk/assets/news_articles/2024/05/1715841848_ocean-point.jpg",
  },
  {
    title: "GREEN YARD",
    status: "on_sale",
    class: "comfort",
    address: "г. Ташкент, Чиланзарский р-н, ул. Мукими 12",
    date: "2025",
    image:
      "https://www.arendator.ru/data/photos/objects/52/52317/abc-photo-136160009_1280x0.png",
  },
  {
    title: "SKYLINE",
    status: "soon",
    class: "premium",
    address: "г. Ташкент, Мирабадский р-н, ул. Шота Руставели 8",
    date: "",
    image:
      "https://fastly.4sqi.net/img/general/600x600/64657745_CNe_l910IQzBYiT_diibhX-k8SVCCNcJ-Rp6CglCQK0.jpg",
  },
];

export default function ProjectsSection() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section className="bg-gray-950 text-white py-20">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-amber-400 mb-14"
          data-aos="fade-in"
        >
          {t("projects.title")}
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="group bg-gray-900 rounded-3xl overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.5)] transform transition-all duration-500"
              data-aos="zoom-in"
              data-aos-delay={i * 80}
            >
              {/* Картинка */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute top-4 left-4 bg-amber-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {t(`projects.status.${p.status}`)}
                </span>
              </div>

              {/* Текст */}
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold text-amber-400">
                  {p.title}
                </h3>
                <p>
                  <span className="text-gray-400 mr-1">
                    {t("projects.labels.class")}:
                  </span>
                  {t(`projects.class.${p.class}`)}
                </p>
                <p>
                  <span className="text-gray-400 mr-1">
                    {t("projects.labels.address")}:
                  </span>
                  {p.address}
                </p>
                {p.date && (
                  <p>
                    <span className="text-gray-400 mr-1">
                      {t("projects.labels.date")}:
                    </span>
                    {p.date}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 flex justify-center" data-aos="fade-up">
          <Link
            to="/projects"
            className="
              inline-block
              bg-[#0B1120]
              border-2 border-amber-400
              text-amber-400
              font-semibold tracking-wide
              px-10 py-3
              rounded-full
              shadow-lg shadow-amber-500/20
              transition-all duration-300
              hover:bg-amber-400 hover:text-gray-950
              hover:shadow-amber-400/40
              hover:-translate-y-1
            "
          >
            {t("projects.more")}
          </Link>
        </div>
      </div>
    </section>
  );
}
