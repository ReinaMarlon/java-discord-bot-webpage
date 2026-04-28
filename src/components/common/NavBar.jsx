import { useEffect } from "react";

import { getUserData } from "../../services/getUserData";

import { FaDiscord } from "react-icons/fa6";

export const NavBar = ({ initialLoad, userLogged }) => {
  const loginDiscord = () => {
    window.location.href = "https://java-discord-api-production.up.railway.app/api/v1/auth/login";
  };

  const { getAvatar } = getUserData();
  const avatar = getAvatar(userLogged);

  const navbarOptions = ["Dashboard", "Únete al servidor", "Estado", "Configuración"]

  return (
    <nav className="fixed top-0 w-full h-20 z-100 px-8 bg-bg/80 backdrop-blur-md border-b border-accent-border flex items-center justify-between shadow-[0_0_15px_rgba(220,2,79,0.2)]">
      <div className="flex items-center gap-10">
        <span className="text-2xl font-bold tracking-widest text-accent drop-shadow-[0_0_6px_#DC024F] hover:animate-pulse cursor-pointer">
          HEXA
        </span>

        <ul className="hidden md:flex items-center gap-8 text-sm">
          {navbarOptions.map((item, i) => (
            <li key={i} className="relative cursor-pointer text-text hover:text-detail transition-all duration-300 before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-detail before:transition-all before:duration-300 hover:before:w-full">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-4">
        {!userLogged ? (
          <button onClick={loginDiscord} className="flex items-center gap-3 px-5 py-2 border border-accent text-accent font-medium text-sm rounded-lg shadow-[0_0_10px_#DC024F] hover:shadow-[0_0_10px_#DC024F] hover:bg-accent hover:text-white transition-all duration-300 cursor-pointer">
            <FaDiscord className="text-lg" />
            Iniciar con Discord
          </button>
        ) : (
          <div className="group flex items-center gap-3 cursor-pointer px-3 py-1.5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-detail transition duration-300 hover:shadow-[0_0_10px_#00B9B4]">

            {/* Avatar */}
            <div className="relative">
              <img
                src={avatar || "https://cdn.discordapp.com/embed/avatars/0.png"}
                alt="avatar"
                className="w-9 h-9 rounded-full border border-accent/60 transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Texto */}
            <span className="text-sm text-text hidden sm:block transition-colors duration-300 group-hover:text-detail">
              {userLogged?.username}
            </span>
          </div>
        )}
      </div>
    </nav>
  );
};