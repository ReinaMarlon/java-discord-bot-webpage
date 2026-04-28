import { useEffect } from "react";
import { useNavigate } from "react-router";

export const AuthCallback = () => {
  const navigate = useNavigate();

  const params = new URLSearchParams(window.location.search);
  const token = params.get("token");

  useEffect(() => {
    if (token) {
      localStorage.setItem("jwt", token);

      // 🔥 limpia la URL (importante)
      window.history.replaceState({}, document.title, "/auth/callback");

      navigate("/main");
    }
  }, [token]);

  return <p>Procesando login...</p>;
};