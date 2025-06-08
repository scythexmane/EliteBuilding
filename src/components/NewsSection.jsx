import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

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
];

export default function NewsSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-950 text-white py-20 px-6 md:px-10">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-16 text-center">
          {t("newsSection.title")}
        </h2>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item, i) => (
            <motion.div
              key={item.titleKey}
              className="bg-gray-900 rounded-3xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-500 flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={item.image}
                  alt={t(item.titleKey)}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
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
                <p className="mt-2 text-gray-300 text-sm flex-grow leading-relaxed">
                  {t(item.descriptionKey)}
                </p>
                <div className="mt-4">
                  <button className="text-amber-400 hover:text-amber-300 font-medium text-sm underline">
                    {t("newsSection.readMore")}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
