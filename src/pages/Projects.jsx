// src/pages/ProjectsPage.jsx
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const allProjects = [
  // 1-6 (те же, что на главной)
  {
    title: "TABIAT RESIDENCE",
    status: "soon",
    class: "business",
    address: "г. Ташкент, Мирзо-Улугбекский р-н, м-р Геофизика",
    date: "",
    image:
      "https://www.mbc.uz/storage/projects/260f4b79-07f1-4805-93ef-09d193b30156.webp",
  },
  {
    title: "SAADIYAT",
    status: "on_sale",
    class: "business",
    address: "г. Ташкент, Мирзо-Улугбекский р-н, ул. Катта Дархан, 15",
    date: "2027",
    image:
      "https://daryo.uz/cache/2020/07/photo_2020-07-08_09-03-55-1280x853.jpg",
  },
  {
    title: "C1",
    status: "on_sale",
    class: "premium",
    address: "г. Ташкент, Яшнабадский р-н, ул. С. Азимова 46А",
    date: "2027",
    image:
      "https://pereplan-one.ru/assets/lib/2019/04/10/m_realty92520.jpg",
  },
  {
    title: "ORIENT TOWER",
    status: "soon",
    class: "premium",
    address: "г. Ташкент, Юнусабадский р-н, пр-т Амира Темура 15",
    date: "",
    image:
      "https://avatars.mds.yandex.net/i?id=4869c2859f34a51d4ee57499f709355ff1d07d7e-4936140-images-thumbs&n=13",
  },
  {
    title: "GREEN YARD",
    status: "on_sale",
    class: "comfort",
    address: "г. Ташкент, Чиланзарский р-н, ул. Мукими 12",
    date: "2025",
    image:
      "https://www.gazeta.uz/media/img/2023/11/N1P18716993596848542_l.jpg",
  },
  {
    title: "SKYLINE",
    status: "soon",
    class: "premium",
    address: "г. Ташкент, Мирабадский р-н, ул. Шота Руставели 8",
    date: "",
    image:
      "https://mbc.uz/storage/projects/96d959a8-85a3-4868-b29f-baeafd850ee3.webp",
  },
  // 7-12
  {
    title: "IMPERIAL HEIGHTS",
    status: "soon",
    class: "premium",
    address: "г. Ташкент, Яккасарайский р-н, ул. Тараса Шевченко 9",
    date: "",
    image:
      "https://www.mbc.uz/storage/projects/d89a7ade-cdfe-4389-a34a-ba75da9437bd.webp",
  },
  {
    title: "SILK ROAD PLAZA",
    status: "on_sale",
    class: "business",
    address: "г. Ташкент, Юнусабадский р-н, ул. Сайрам 5",
    date: "2026",
    image:
      "https://domtut.uz/resources/uploads/property/realty/888006-3komn-kv85/main_2.jpg",
  },
  {
    title: "CENTRAL PARK RESIDENCE",
    status: "on_sale",
    class: "comfort",
    address: "г. Ташкент, Шайхантаурский р-н, ул. Заръёй 40",
    date: "2025",
    image:
      "https://urbo.uz/_next/image?url=https%3A%2F%2Fapi-urbo.uz%2Fmedia%2FMedia%2FMedia%2Fopt__1920__9acbc17c99019e27bc7479893fe92ccd_80.webp&w=828&q=75",
  },
  {
    title: "MIRAN BUSINESS CENTER",
    status: "soon",
    class: "business",
    address: "г. Ташкент, Алмазорский р-н, ул. Беруний 77",
    date: "",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "NOVA CITY",
    status: "soon",
    class: "comfort",
    address: "г. Ташкент, Сергелийский р-н, пр-т Карасу 3",
    date: "",
    image:
      "https://mbc.uz/storage/projects/8a87f481-9b5d-475b-86ab-177a28a0ea04.webp",
  },
  {
    title: "LOTUS GARDEN",
    status: "on_sale",
    class: "premium",
    address: "г. Ташкент, Учтепинский р-н, ул. Фароби 21",
    date: "2026",
    image:
      "https://mbc.uz/storage/projects/cd6e4677-98a8-485f-bba0-2ddbbaa84cda.webp",
  },
  // 13-18
  {
    title: "PEARL TOWER",
    status: "soon",
    class: "premium",
    address: "г. Ташкент, Чиланзарский р-н, ул. Бунёдкор 23",
    date: "",
    image:
      "https://mbc.uz/storage/projects/c3a54cf9-5123-4ef7-9333-63fa2a664e0a.webp",
  },
  {
    title: "QUANTUM APARTMENTS",
    status: "on_sale",
    class: "business",
    address: "г. Ташкент, Мирзо-Улугбекский р-н, ул. Зиёли 35",
    date: "2027",
    image:
      "https://mbc.uz/storage/projects/61d637fb-4406-40da-af79-b4f0b33c653a.webp",
  },
  {
    title: "AZURE RESIDENCE",
    status: "soon",
    class: "premium",
    address: "г. Ташкент, Мирабадский р-н, ул. Гагарина 14",
    date: "",
    image:
      "https://mbc.uz/storage/projects/96d959a8-85a3-4868-b29f-baeafd850ee3.webp",
  },
  {
    title: "MILLENNIUM PLAZA",
    status: "on_sale",
    class: "business",
    address: "г. Ташкент, Юнусабадский р-н, пр-т Узбекистан 1",
    date: "2026",
    image:
      "https://www.condosvela.com/wp-content/uploads/2021/08/vela-immeuble.jpg",
  },
  {
    title: "PARKVIEW LOFTS",
    status: "soon",
    class: "comfort",
    address: "г. Ташкент, Шайхантаурский р-н, ул. Кораташ 8",
    date: "",
    image:
      "https://avatars.mds.yandex.net/get-altay/10767436/2a00000191680b6a00460b5e81be80fe7b4f/XXXL",
  },
  {
    title: "SUNRISE RESIDENCE",
    status: "on_sale",
    class: "comfort",
    address: "г. Ташкент, Сергелийский р-н, ул. Янгихаёт 2",
    date: "2025",
    image:
      "https://avatars.mds.yandex.net/i?id=faa61c3e00410dd954b8329885af5bce1df68010-8873941-images-thumbs&ref=rim&n=33&w=374&h=250",
  },
  // 19-20
  {
    title: "HORIZON TOWER",
    status: "soon",
    class: "premium",
    address: "г. Ташкент, Яккасарайский р-н, ул. Бухарская 30",
    date: "",
    image:
      "https://avatars.mds.yandex.net/i?id=310dbace9bdbc02d4cce1a20d537204a5e6324c7-10128543-images-thumbs&ref=rim&n=33&w=444&h=250",
  },
  {
    title: "EMERALD COURT",
    status: "on_sale",
    class: "business",
    address: "г. Ташкент, Алмазорский р-н, ул. Темир Йўлчи 18",
    date: "2026",
    image:
      "https://www.demirce.com/resimler/ontan-manisa-4-.jpg",
  },
];

const statusFilters = ["on_sale", "soon"];
const classFilters = ["business", "comfort", "premium"];

export default function ProjectsPage() {
  const { t } = useTranslation();
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  const filteredProjects = allProjects.filter((project) => {
    const statusMatch = selectedStatus
      ? project.status === selectedStatus
      : true;
    const classMatch = selectedClass ? project.class === selectedClass : true;
    return statusMatch && classMatch;
  });

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const loadMore = () => setVisibleCount((prev) => prev + 6);

  return (
    <section className="bg-gray-950 text-white pt-32 pb-20 px-4 md:px-6 lg:px-12">
      <div className="text-center mb-12" data-aos="fade-down">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-amber-400">
          {t("projects.title")}
        </h1>
      </div>

      {/* === FILTERS === */}
      <div className="flex flex-wrap gap-4 justify-center mb-14">
        {/* Статус */}
        {statusFilters.map((status) => (
          <button
            key={status}
            onClick={() =>
              setSelectedStatus(selectedStatus === status ? null : status)
            }
            className={`px-5 py-2 rounded-full border-2 text-sm font-medium transition-all duration-300 ${
              selectedStatus === status
                ? "bg-amber-400 text-gray-950 border-amber-400"
                : "border-gray-700 text-gray-300 hover:border-amber-400 hover:text-amber-400"
            }`}
          >
            {t(`projects.status.${status}`)}
          </button>
        ))}
        {/* Класс */}
        {classFilters.map((cls) => (
          <button
            key={cls}
            onClick={() => setSelectedClass(selectedClass === cls ? null : cls)}
            className={`px-5 py-2 rounded-full border-2 text-sm font-medium transition-all duration-300 ${
              selectedClass === cls
                ? "bg-amber-400 text-gray-950 border-amber-400"
                : "border-gray-700 text-gray-300 hover:border-amber-400 hover:text-amber-400"
            }`}
          >
            {t(`projects.class.${cls}`)}
          </button>
        ))}
        {/* Кнопка сброса */}
        {(selectedStatus || selectedClass) && (
          <button
            onClick={() => {
              setSelectedStatus(null);
              setSelectedClass(null);
              setVisibleCount(6);
            }}
            className="ml-2 px-5 py-2 rounded-full bg-gray-800 text-sm text-gray-300 border border-gray-700 hover:bg-red-500 hover:text-white transition-all"
          >
            {t("projects.clearFilters")}
          </button>
        )}
      </div>

      {/* === PROJECTS === */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.length > 0 ? (
          visibleProjects.map((p, i) => (
            <div
              key={p.title}
              className="group bg-gray-900 rounded-3xl overflow-hidden shadow-xl transform transition duration-500 ease-in-out hover:scale-[1.02] hover:-translate-y-1 hover:shadow-amber-400/30"
              data-aos="zoom-in"
              data-aos-delay={i * 80}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute top-4 left-4 bg-amber-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {t(`projects.status.${p.status}`)}
                </span>
              </div>
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
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full mt-10">
            {t("projects.noResults")}
          </p>
        )}
      </div>

      {/* === Load More === */}
      {visibleCount < filteredProjects.length && (
        <div className="mt-16 flex justify-center" data-aos="fade-up">
          <button
            onClick={loadMore}
            className="bg-[#0B1120] border-2 border-amber-400 text-amber-400 font-semibold tracking-wide px-10 py-3 rounded-full shadow-lg shadow-amber-500/20 transition-all duration-300 hover:bg-amber-400 hover:text-gray-950 hover:shadow-amber-400/40 hover:-translate-y-1"
          >
            {t("projects.more")}
          </button>
        </div>
      )}
    </section>
  );
}
