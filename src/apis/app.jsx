/** @format */

import axios from "../axios";

export const apiCategories = () =>
  axios({
    url: "/prodcategory/",
    method: "get",
  });
