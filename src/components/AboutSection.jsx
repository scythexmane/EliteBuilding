
import React from "react";
import { useTranslation } from "react-i18next";

export default function CompanySection() {
  const { t } = useTranslation();

  return (
    <section className=" bg-[url('https://wallpapers.com/images/hd/blue-marble-1920-x-1080-wallpaper-zz4u51hcokbczc5v.jpg')] bg-cover bg-center text-white py-20 px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Текстовая часть */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-6">
            {t("company.title")}
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            {t("company.description")}
          </p>

          <div className="grid grid-cols-2 gap-6 mt-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-amber-400">25+</h3>
              <p className="text-sm text-gray-400">{t("company.projects")}</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-amber-400">500,000 м²</h3>
              <p className="text-sm text-gray-400">{t("company.area")}</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-amber-400">15 лет</h3>
              <p className="text-sm text-gray-400">{t("company.experience")}</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-amber-400">1000+</h3>
              <p className="text-sm text-gray-400">{t("company.families")}</p>
            </div>
          </div>
        </div>

        {/* Фото */}
        <div className="lg:w-1/2 relative rounded-3xl overflow-hidden shadow-2xl group">
          <img
            src="https://ined1.kz/novostroyka/imgtovar/020220615091941.jpg"
            alt="Company"
            className="w-full object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-700 rounded-3xl" />
        </div>
      </div>
    </section>
  );
}


