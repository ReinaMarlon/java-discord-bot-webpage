import { useMemo } from "react";

export const InfoCard = ({
  image,
  imageAlt = "",
  title = "",
  description = "",
  imagePosition = "left" // "left" | "right"
}) => {

  // Generar posición random SOLO una vez
  const glowPosition = useMemo(() => {
    const positions =
      imagePosition === "left" ? [
        "top-[-80px] right-[-80px]",
        "bottom-[-80px] right-[-80px]",
        "top-[-80px] right-[80px]",
        "bottom-[-80px] right-[80px]",
        "top-[80px] right-[-80px]",
        "bottom-[80px] right-[-80px]",
        "top-[80px] right-[80px]",
        "bottom-[80px] right-[80px]",
        "top-[160px] right-[-80px]",
        "bottom-[160px] right-[-80px]",
        "top-[160px] right-[80px]",
        "bottom-[160px] right-[80px]",
      ]
        : [
          "top-[-80px] left-[-80px]",
          "bottom-[-80px] left-[-80px]",
          "top-[-80px] left-[80px]",
          "bottom-[-80px] left-[80px]",
          "top-[80px] left-[-80px]",
          "bottom-[80px] left-[-80px]",
          "top-[80px] left-[80px]",
          "bottom-[80px] left-[80px]",
          "top-[160px] left-[-80px]",
          "bottom-[160px] left-[-80px]",
          "top-[160px] left-[80px]",
          "bottom-[160px] left-[80px]",
        ];

    return positions[Math.floor(Math.random() * positions.length)];
  }, []);

  // Control de orden
  const isRight = imagePosition === "right";

  return (
    <article className={`relative overflow-hidden rounded-2xl bg-code-bg border border-border shadow-lg transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_0_25px_rgba(220,2,79,0.35)] flex flex-col md:flex-row group`}>

      {/* Imagen */}
      <div className={`w-full h-48 sm:h-56 md:h-auto md:w-1/2 overflow-hidden ${isRight ? "md:order-2" : ""}`}>
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Contenido */}
      <div className={`relative p-5 sm:p-6 md:p-8 flex flex-col justify-center gap-3 md:w-1/2 ${isRight ? "md:order-1" : ""}`}>
        <header className="text-xl sm:text-2xl md:text-3xl font-bold text-text-h">
          {title}
        </header>

        <p className="text-text text-sm sm:text-base leading-relaxed">
          {description}
        </p>

        <div className="mt-2 h-0.5 w-16 sm:w-20 bg-accent rounded-full"></div>
      </div>

      {/* Overlay dinámico */}
      <div className={`hidden md:block absolute inset-0 pointer-events-none ${isRight
        ? "bg-linear-to-l from-transparent to-bg/70"
        : "bg-linear-to-r from-transparent to-bg/70"
        }`}></div>

      {/* Glow random */}
      <div className={`absolute ${glowPosition} w-60 h-60 bg-accent/50 blur-3xl opacity-20`}></div>
    </article>
  );
};