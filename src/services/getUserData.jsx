export const getUserData = () => {
  const CDN = "https://cdn.discordapp.com/";

  const getAvatar = (user) => {
    // console.log("user", user.avatar);

    if (!user) {
      return;
    }

    if (user.avatar) {
      const isGif = user.avatar.startsWith("a_");
      return `${CDN}/avatars/${user.id}/${user.avatar}.${isGif ? "gif" : "png"}?size=256`;
    }

    return `${CDN}/embed/avatars/0.png`;
  };

  return { getAvatar }
}
