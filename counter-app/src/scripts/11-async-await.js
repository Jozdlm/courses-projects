export const getGifImg = async () => {
  try {
    const apiKey = "uGypZ1DrIpzfiR7CVm6nxlUxct4jDmt7";
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;
    return url;
  } catch (error) {
    return "Image not founded";
  }
};
