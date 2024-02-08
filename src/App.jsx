/** @format */
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Public,
  Home,
  Login,
  DetailProduct,
  Blogs,
  FAQs,
  Services,
  Products,
  FinalRegister,
  ResetPassword,
  MyCart,
  Shipping,
  Payment,
} from "./pages/public";
import {
  CreateProduct,
  Dashboard,
  ManageOrder,
  ManageProduct,
  ManageUser,
} from "./pages/admin";
import { Addresses, MemberLayout, Personal } from "./pages/member";
import path from "./ultils/path";
import { getCategories } from "./redux/app/appAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Modal } from "./components";
import AdminLayout from "./pages/admin/AdminLayout";

function App() {
  const dispatch = useDispatch();
  const { isShowModal, modalChildren, modalCenter } = useSelector(
    (state) => state.app
  );
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <div className={`$ min-h-screen font-main relative`}>
      {isShowModal && <Modal center={modalCenter}>{modalChildren}</Modal>}
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.BLOGS} element={<Blogs />} />
          <Route
            path={path.DETAIL_PRODUCT_CATEGORY_PID_TITLE}
            element={<DetailProduct />}
          />
          <Route path={path.FAQS} element={<FAQs />} />
          <Route path={path.OUR_SERVICES} element={<Services />} />
          <Route path={path.PRODUCTS_CATEGORY} element={<Products />} />
          <Route path={path.CART} element={<MyCart />} />
          <Route
            path={`${path.CART}/${path.SHIPPING}`}
            element={<Shipping />}
          />
          <Route
            path={`${path.CART}/${path.SHIPPING}/${path.PAYMENT}`}
            element={<Payment />}
          />
          <Route path={path.ALL} element={<Home />} />
        </Route>
        <Route path={path.ADMIN} element={<AdminLayout />}>
          <Route path={path.MANAGE_USER} element={<ManageUser />} />
          <Route path={path.MANAGE_PRODUCT} element={<ManageProduct />} />
          <Route path={path.MANAGE_ORDER} element={<ManageOrder />} />
          <Route path={path.DASHBOARD} element={<Dashboard />} />
          <Route path={path.CREATE_PRODUCT} element={<CreateProduct />} />
        </Route>
        <Route path={path.MEMBER} element={<MemberLayout />}>
          <Route path={path.PERSONAL} element={<Personal />} />
          <Route path={path.ADDRESSES} element={<Addresses />} />
        </Route>

        <Route path={path.RESET_PASSWORD} element={<ResetPassword />} />
        <Route path={path.LOGIN} element={<Login />} />
        <Route path={path.FINAL_REGISTER} element={<FinalRegister />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <ToastContainer />
    </div>
  );
}

export default App;
