/** @format */

import path from "./path";
import icons from "./icons";
const { FaGift, FaShieldAlt, FaTruck, GiReturnArrow, MdOutlinePermPhoneMsg } =
  icons;

export const navigation = [
  {
    id: 1,
    value: "HOME",
    path: `/${path.HOME}`,
  },
  {
    id: 2,
    value: "PRODUCTS",
    path: `/${path.PRODUCTS}`,
  },
  {
    id: 3,
    value: "BLOGS",
    path: `/${path.BLOGS}`,
  },
  {
    id: 4,
    value: "OUR SERVICES",
    path: `/${path.OUR_SERVICES}`,
  },
  {
    id: 5,
    value: "FAQS",
    path: `/${path.FAQS}`,
  },
];

export const productExtra = [
  {
    id: 1,
    title: "Guarantee",
    subtitle: "Quality Checked",
    icon: <FaShieldAlt />,
  },
  {
    id: 2,
    title: "Free Shipping",
    subtitle: "Free On All Products",
    icon: <FaTruck />,
  },
  {
    id: 3,
    title: "Special Gift Cards",
    subtitle: "Special Gift CardsFree Return",
    icon: <FaGift />,
  },
  {
    id: 4,
    title: "Free Return",
    subtitle: "Within 7 Days",
    icon: <GiReturnArrow />,
  },
  {
    id: 5,
    title: "Consultancy",
    subtitle: "Lifetime 24/7/356",
    icon: <MdOutlinePermPhoneMsg />,
  },
];
