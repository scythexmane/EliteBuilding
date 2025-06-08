import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";

// Список новостей
const news = [
  {
    titleKey: "news.0.title",
    date: "01.06.2025",
    descriptionKey: "news.0.description",
    image: "https://mbc.uz/storage/media/MUZ41100_1741959481.png",
  },
  {
    titleKey: "news.1.title",
    date: "20.05.2025",
    descriptionKey: "news.1.description",
    image:
      "https://img.freepik.com/premium-vector/3d-surprise-open-gift-box-with-falling-confetti-present-box-as-prize-concept-christmas-new-year-s-surprise-present-box-birthday-3d-rendering-vector-illustration_165488-7020.jpg",
  },
  {
    titleKey: "news.2.title",
    date: "15.04.2025",
    descriptionKey: "news.2.description",
    image:
      "https://novostroev.ru/upload/iblock/a3a/m-conveyancing-why-choose-kiteleys75.jpg",
  },
  {
    titleKey: "news.3.title",
    date: "28.03.2025",
    descriptionKey: "news.3.description",
    image: "https://avatars.mds.yandex.net/i?id=18584bfb1cc2dc643b84856f05b469b6_l-4985796-images-thumbs&ref=rim&n=13&w=1080&h=1080",
  },
  {
    titleKey: "news.4.title",
    date: "10.03.2025",
    descriptionKey: "news.4.description",
    image: "https://mbc.uz/storage/projects/8a87f481-9b5d-475b-86ab-177a28a0ea04.webp",
  },
  {
    titleKey: "news.5.title",
    date: "01.03.2025",
    descriptionKey: "news.5.description",
    image: "https://mbc.uz/storage/projects/cd6e4677-98a8-485f-bba0-2ddbbaa84cda.webp",
  },
  {
    titleKey: "news.6.title",
    date: "15.02.2025",
    descriptionKey: "news.6.description",
    image: "https://mbc.uz/storage/projects/c3a54cf9-5123-4ef7-9333-63fa2a664e0a.webp",
  },
  {
    titleKey: "news.7.title",
    date: "01.02.2025",
    descriptionKey: "news.7.description",
    image: "https://mbc.uz/storage/projects/61d637fb-4406-40da-af79-b4f0b33c653a.webp",
  },
  {
    titleKey: "news.8.title",
    date: "15.01.2025",
    descriptionKey: "news.8.description",
    image: "https://mbc.uz/storage/projects/96d959a8-85a3-4868-b29f-baeafd850ee3.webp",
  },
  {
    titleKey: "news.9.title",
    date: "01.01.2025",
    descriptionKey: "news.9.description",
    image: "https://www.condosvela.com/wp-content/uploads/2021/08/vela-immeuble.jpg",
  },
  {
    titleKey: "news.10.title",
    date: "15.12.2024",
    descriptionKey: "news.10.description",
    image: "https://avatars.mds.yandex.net/get-altay/10767436/2a00000191680b6a00460b5e81be80fe7b4f/XXXL",
  },
  {
    titleKey: "news.11.title",
    date: "01.12.2024",
    descriptionKey: "news.11.description",
    image: "https://avatars.mds.yandex.net/i?id=faa61c3e00410dd954b8329885af5bce1df68010-8873941-images-thumbs&ref=rim&n=33&w=374&h=250",
  },
];

const featured = news.slice(0, 4);
const archive = news.slice(4, 10);

// Карточка новости
function NewsCard({ item, index, compact = false }) {
  const { t } = useTranslation();

  return (
    <motion.div
      className={
        compact
          ? "rounded-3xl overflow-hidden shadow-lg bg-gray-900"
          : "bg-gray-900 rounded-3xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-500 flex flex-col"
      }
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.1,
        duration: 0.9,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      viewport={{ once: true }}
    >
      <div className="relative h-60 overflow-hidden">
        <img
          src={item.image}
          alt={t(item.titleKey)}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition duration-500" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-sm text-gray-400 mb-3">
          <FaRegCalendarAlt className="mr-2" />
          {item.date}
        </div>
        <h3 className="text-xl font-semibold text-white group-hover:text-amber-400 transition-colors duration-300">
          {t(item.titleKey)}
        </h3>
        {!compact && (
          <p className="mt-2 text-gray-300 text-sm flex-grow leading-relaxed">
            {t(item.descriptionKey)}
          </p>
        )}
        {!compact && (
          <div className="mt-4">
            <button className="text-amber-400 hover:text-amber-300 font-medium text-sm underline">
              {t("newsSection.readMore", "Подробнее")}
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}

// Главная страница новостей
export default function NewsPage() {
  const { t } = useTranslation();

  return (
    <main className="bg-gray-950 text-white scroll-smooth">
      {/* Хиро-секция */}
      <section className="relative h-[65vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://domtut.uz/resources/uploads/property/regnum-plaza/main_2.jpg"
          alt="hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-3xl px-4"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-amber-400 drop-shadow-lg">
            {t("newsPage.heroTitle", "Последние новости & обновления")}
          </h1>
          <p className="mt-6 text-gray-300 text-lg md:text-xl">
            {t(
              "newsPage.heroSubtitle",
              "Будьте в курсе последних событий и новостей нашей компании."
            )}
          </p>
        </motion.div>
      </section>

      {/* Избранные новости */}
      <section className="py-20 px-6 md:px-10 max-w-screen-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-12 text-center">
          {t("newsPage.featuredTitle", "Избранные новости")}
        </h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop
          className="pb-10"
        >
          {featured.map((item, i) => (
            <SwiperSlide key={item.titleKey}>
              <NewsCard item={item} index={i} compact />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Основная сетка новостей */}
      <section id="latest" className="py-20 px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-16 text-center">
            {t("newsSection.title", "Последние новости")}
          </h2>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {news.map((item, i) => (
              <NewsCard item={item} index={i} key={item.titleKey} />
            ))}
          </div>
        </div>
      </section>

      {/* Архив новостей */}
      <section className="py-20 px-6 md:px-10 max-w-screen-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-12 text-center">
          {t("newsPage.archiveTitle", "Архив новостей")}
        </h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          loop
          className="pb-10"
        >
          {archive.map((item, i) => (
            <SwiperSlide key={item.titleKey}>
              <NewsCard item={item} index={i} compact />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </main>
  );
}
