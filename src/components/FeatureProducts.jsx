/** @format */

import { useEffect, useState } from "react";
import { getProducts } from "../apis";

const FeatureProducts = () => {
  const [products, setProducts] = useState(null);
  const fetchDataFeatureProduct = async () => {
    const res = await getProducts({
      limit: 9,
      page: Math.round(Math.random() * 2),
      totalRating: 5,
    });
    // if(res.success)
    console.log(res);
  };
  useEffect(() => {
    fetchDataFeatureProduct();
  }, []);
  return (
    <div>
      <h2 className="text-[20px] py-[15px] mb-[20px] text-[#151515] uppercase border-b-2 border-main border-solid">
        Feature Products
      </h2>
      <div>Feature</div>
    </div>
  );
};

export default FeatureProducts;
