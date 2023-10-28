/** @format */
import icons from "./icons";
const { AiFillStar, AiOutlineStar } = icons;
export const formatMoney = (number) =>
  Number(number?.toFixed(1)).toLocaleString();

export const renderStars = (number, size) => {
  const arrStar = [];

  for (let i = 0; i < number; i++)
    arrStar.push(<AiFillStar color="#f1b400" size={size || 16} />);
  for (let i = 5; i > number; i--)
    arrStar.push(<AiOutlineStar color="#f1b400" size={size || 16} />);

  return arrStar;
};
