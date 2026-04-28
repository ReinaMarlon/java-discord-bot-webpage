import { useLocation } from "react-router";
import { useEffect, useState } from "react";

import { NavBar } from "../../components/common/NavBar";
import { InfoCard } from "../../components/common/InfoCard";

import cardExample from "../../assets/imgs/cardExample.png";
import character from "../../assets/imgs/Character.png";
import bg from "../../assets/imgs/HexagonBG.svg";

export const MainPage = () => {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [initialLoad, setInitialLoad] = useState(false);

  // Obtener usuario
  useEffect(() => {
    const usuario = async () => {
      try {
        const token = localStorage.getItem("jwt");

        if (!token) {
          return;
        }

        const res = await fetch(
          "https://java-discord-api-production.up.railway.app/api/v1/users/me",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!res.ok) throw new Error("Token inválido");

        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    };

    usuario();
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  // Animación inicial
  useEffect(() => {
    localStorage.clear();
    setTimeout(() => setInitialLoad(true), 100);
  }, []);

  return (
    <main className="w-full flex flex-col items-center justify-start overflow-x-hidden bg-bg">
      <NavBar initialLoad={initialLoad} userLogged={user} />

      {/* HERO */}
      <section className="w-full max-w-screen h-screen max-h-screen flex flex-col items-center relative">
        {/* NAVBAR STICKY */}

        {/* Fondo */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-out ${initialLoad ? "opacity-100" : "opacity-0"}`}
          style={{ backgroundImage: `url(${bg})` }}
        />

        {/* Personaje */}
        <div
          className={`h-[90%] absolute top-24 transition-all duration-1000 ease-out ${initialLoad ? "-left-50 opacity-100" : "-left-150 opacity-0"}`}
        >
          <img
            className="scale-x-[-1] h-full drop-shadow-[0_0_20px_#00000080]"
            src={character}
            alt="Image of the bot character"
          />
        </div>

        {/* Barras animadas */}
        <article className="w-full p-5 flex justify-end items-end gap-5 h-full z-10">
          <span className={`bg-detail w-48 transition-all duration-1000 ease-out ${initialLoad ? "h-10" : "h-0"}`}></span>
          <span className={`bg-accent-bg w-48 transition-all duration-1000 ease-out ${initialLoad ? "h-48" : "h-0"}`}></span>
          <span className={`bg-accent w-48 transition-all duration-1000 ease-out ${initialLoad ? "h-32" : "h-0"}`}></span>
        </article>

        {/* Footer sección */}
        <footer
          onClick={() => setInitialLoad(prev => !prev)}
          className="w-full min-h-40 flex-1 bg-code-bg text-white z-20"
        />
      </section>

      {/* INFO */}
      <section
        className="w-full flex flex-col items-center py-10 px-24 gap-10"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <InfoCard
          image={cardExample}
          imageAlt="Example image"
          title="Example action"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <InfoCard
          image={cardExample}
          imageAlt="Example image"
          title="Example action"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imagePosition="right"
        />

        <InfoCard
          image={cardExample}
          imageAlt="Example image"
          title="Example action"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </section>

      {/* Footer global */}
      <footer
        onClick={() => setInitialLoad(prev => !prev)}
        className="w-full min-h-40 flex-1 bg-code-bg text-white z-20"
      />
    </main>
  );
};