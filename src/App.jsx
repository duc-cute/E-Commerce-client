/** @format */
import { Route, Routes } from "react-router-dom";
import {
  Public,
  Home,
  Login,
  DetailProduct,
  Blogs,
  FAQs,
  Services,
  Products,
} from "./pages/public";
import path from "./ultils/path";
import { getCategories } from "./redux/app/appAction";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <div className="min-h-screen font-main">
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.BLOGS} element={<Blogs />} />
          <Route
            path={path.DETAIL_PRODUCT_PID_TITLE}
            element={<DetailProduct />}
          />
          <Route path={path.FAQS} element={<FAQs />} />
          <Route path={path.PRODUCTS} element={<Products />} />
          <Route path={path.OUR_SERVICES} element={<Services />} />
        </Route>
        <Route path={path.LOGIN} element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
