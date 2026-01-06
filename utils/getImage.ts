import Images from "../assets/images";

export const getImage = (key: keyof typeof Images) => {
  return Images[key];
};
