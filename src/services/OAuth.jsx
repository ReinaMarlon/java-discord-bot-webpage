export const OAuth = () => {
  const loginDiscord = () => {
    window.location.href =
      "https://java-discord-api-production.up.railway.app/api/v1/auth/login";
  };

  return { loginDiscord };
};