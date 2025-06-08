import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const slides = [
  {
    id: 1,
    titleKey: "hero.slide1.title",
    subtitleKey: "hero.slide1.subtitle",
    imageUrl:
      "https://i.pinimg.com/originals/7a/e1/6a/7ae16a2ddc4994ee376eb210cf6281ad.jpg",
  },
  {
    id: 2,
    titleKey: "hero.slide2.title",
    subtitleKey: "hero.slide2.subtitle",
    imageUrl:
      "https://www.cepheyedair.com/wp-content/uploads/2022/01/Reynaers-Nest-One.png",
  },
  {
    id: 3,
    titleKey: "hero.slide3.title",
    subtitleKey: "hero.slide3.subtitle",
    imageUrl:
      "https://domtut.uz/resources/uploads/property/soy-boyi/main_1.jpg",
  },
];

const textVariants = {
  initial: { opacity: 0, x: -50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] },
  },
  exit: {
    opacity: 0,
    x: 50,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);
  const { t } = useTranslation();

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    beforeChange: (_, next) => setActiveIndex(next),
  };

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current?.slickNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => sliderRef.current?.slickGoTo(index);
  const goToNext = () => sliderRef.current?.slickNext();
  const goToPrev = () => sliderRef.current?.slickPrev();

  const activeSlide = slides[activeIndex];
  const title = t(activeSlide.titleKey);
  const subtitle = t(activeSlide.subtitleKey);
  const [firstWord, ...restWords] = title.split(" ");
  const restTitle = restWords.join(" ");

  return (
    <section className="relative flex flex-col md:flex-row min-h-screen bg-gray-900 font-tinos overflow-hidden">
      {/* Text Section */}
      <div className="w-full md:w-2/5 max-h-screen flex flex-col justify-between bg-[#0B1120] text-white p-8 md:p-12 lg:p-20 z-10">
        <div className="max-w-md mx-auto flex flex-col justify-center flex-grow">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider leading-tight">
                <span className="text-amber-500">{firstWord}</span>{" "}
                <span className="text-amber-400">{restTitle}</span>
              </h1>
              <p className="mt-4 text-lg text-gray-100">{subtitle}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="max-w-md mx-auto w-full mt-auto">
          <div className="flex justify-center md:justify-start space-x-4 mt-10">
            <button
              onClick={goToPrev}
              className="text-white hover:text-amber-400 transition-colors duration-300 p-2 rounded-full border border-white hover:border-amber-400"
              aria-label="Previous slide"
            >
              <FiChevronLeft className="h-8 w-8" />
            </button>
            <button
              onClick={goToNext}
              className="text-white hover:text-amber-400 transition-colors duration-300 p-2 rounded-full border border-white hover:border-amber-400"
              aria-label="Next slide"
            >
              <FiChevronRight className="h-8 w-8" />
            </button>
          </div>
          <div className="flex space-x-3 mt-6 md:mt-10 justify-center md:justify-start">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Slide ${index + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                  activeIndex === index
                    ? "bg-white"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative w-full md:w-3/5 h-full">
        <Slider ref={sliderRef} {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="relative w-full h-screen">
              <img
                src={slide.imageUrl}
                alt={t(slide.titleKey)}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
        <div className="absolute inset-0 bg-black/40 md:hidden z-10" />
      </div>
    </section>
  );
};

export default HeroCarousel;
