import FontFaceObserver from "fontfaceobserver";

export const Fonts = async () => {
  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap";
  link.rel = "stylesheet";

  document.head.appendChild(link);

  const roboto = new FontFaceObserver("Roboto");

  await roboto.load();

  document.documentElement.classList.add("roboto");
};
