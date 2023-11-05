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

export const validate = (payload, setInvalidFields) => {
  let invalid = 0;
  const formatPayload = Object.entries(payload);
  for (let arr of formatPayload) {
    if (arr[1].trim() === "") {
      invalid++;
      setInvalidFields((prev) => [
        ...prev,
        { name: arr[0], mes: "Require this field" },
      ]);
    }
  }
  for (let arr of formatPayload) {
    switch (arr[0]) {
      case "email":
        const regex = new RegExp(
          '^(([^<>()[\\]\\.,;:\\s@"]+(\\.[^<>()[\\]\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
        );

        if (!arr[1].match(regex)) {
          invalid++;
          setInvalidFields((prev) => [
            ...prev,
            { name: arr[0], mes: "Invalid Email" },
          ]);
        }
        break;
      case "password":
        if (arr[1].length < 6) {
          invalid++;
          setInvalidFields((prev) => [
            ...prev,
            { name: arr[0], mes: "Password minimum 6 characters" },
          ]);
        }
        break;
      default:
        break;
    }
  }

  return invalid;
};
