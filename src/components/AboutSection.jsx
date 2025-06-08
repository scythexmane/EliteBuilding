import React from "react";
import { useTranslation } from "react-i18next";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

export default function CompanySection() {
  const { t } = useTranslation();

  const pieData = [
    { name: t("company.residential"), value: 60 },
    { name: t("company.commercial"), value: 25 },
    { name: t("company.industrial"), value: 15 },
  ];

  const COLORS = ["#F59E0B", "#6366F1", "#10B981"];

  const barData = [
    { name: t("company.2021"), projects: 8 },
    { name: t("company.2022"), projects: 12 },
    { name: t("company.2023"), projects: 18 },
    { name: t("company.2024"), projects: 22 },
  ];

  return (
    <section
      className=" bg-gray-950  text-white py-20 px-6 md:px-12"
      style={{
        backgroundImage:
          "url('https://avatars.mds.yandex.net/i?id=c1c04861418d9f698bf8ab48ff47b2f2_l-10667780-images-thumbs&ref=rim&n=13&w=1680&h=1050')", // ← путь к вашему фону
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
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

          <div className="mt-10">
            <h4 className="text-2xl font-semibold text-white mb-4">
              {t("company.projectTypes")}
            </h4>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-10">
            <h4 className="text-2xl font-semibold text-white mb-4">
              {t("company.growth")}
            </h4>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                <XAxis dataKey="name" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip />
                <Bar dataKey="projects" fill="#F59E0B" />
              </BarChart>
            </ResponsiveContainer>
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
