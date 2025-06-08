import React, { useEffect } from "react";
import icon from "../assets/image.png"; // Убедись, что путь к логотипу правильный

const Logo = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000); // Увеличено до 3.5 секунд
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#081118] z-60">
      <img
        src={icon}
        alt="EliteBuild Logo"
        className="w-48 h-48 opacity-0 animate-logoFade"
        style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
      />
      <style>
        {`
          @keyframes logoFade {
            0% { opacity: 0; transform: scale(0.8); }
            50% { opacity: 1; transform: scale(1.05); }
            100% { opacity: 0; transform: scale(0.98); }
          }
          .animate-logoFade {
            animation: logoFade 2s ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default Logo;
