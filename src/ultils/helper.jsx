/** @format */
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
export const formatMoney = (number) =>
  Number(number.toFixed(1)).toLocaleString();

export const renderStars = (number) => {
  const arrStar = [];

  for (let i = 0; i < number; i++) arrStar.push(<AiFillStar color="#f1b400" />);
  for (let i = 5; i > number; i--)
    arrStar.push(<AiOutlineStar color="#f1b400" />);

  return arrStar;
};
