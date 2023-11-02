/** @format */
import loginImage from "../../assets/images/login.png";
import logoImage from "../../assets/images/IconLogo.png";
import icons from "../../ultils/icons";
import { useCallback, useState } from "react";
import { InputField, Button } from "../../components";
import { apiLogin, apiRegister } from "../../apis";
import swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import path from "../../ultils/path";
import { register } from "../../redux/user/userSlice";
import { useDispatch } from "react-redux";
const { HiOutlineMail, BiLock, FiUser, RiPhoneFill } = icons;
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isRegister, setIsRegister] = useState(false);
  const [payload, setPayload] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    mobile: "",
  });
  const resetPayload = () => {
    setPayload({
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      mobile: "",
    });
  };

  const handleSubmit = useCallback(async () => {
    const { firstname, lastname, mobile, ...data } = payload;
    if (isRegister) {
      const rs = await apiRegister(payload);
      console.log("rs registe", rs);
      console.log("rs payload", payload);
      if (rs.success) {
        swal.fire("Congralation", rs?.mes, "success").then(() => {
          setIsRegister(false);
          resetPayload();
        });
      } else {
        swal.fire("Oops!", rs?.mes, "error");
      }
    } else {
      const rs = await apiLogin(data);
      if (rs.success) {
        dispatch(
          register({
            isLoggedIn: true,
            token: rs.accessToken,
            userData: rs.userData,
          })
        );
        navigate(`/${path.HOME}`);
      } else swal.fire("Oops!", rs?.mes, "error");
    }
  }, [payload, isRegister]);
  return (
    <div className="flex items-center justify-around h-screen">
      <div className="flex-1 flex flex-col justify-center items-center ">
        <img src={loginImage} alt="login" />
        <p className="font-medium text-[18px] text-[#1A162E] leading-6 mt-8">
          The best of luxury brand values, high quality products, and innovative
          services
        </p>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center ">
        <div className="flex gap-2 items-center mb-8">
          <img src={logoImage} alt="logo" />
          <p className="text-[18px] font-bold">grocerymart</p>
        </div>
        <div className="text-center mb-8">
          <h1 className="text-[30px] font-medium mb-5">
            {isRegister ? "Sign Up " : "Hello Again!"}
          </h1>
          <p className="text-[#9E9DA8] font-medium text-[14px]">
            {isRegister
              ? "Let’s create your account and Shop like a pro and save money."
              : "Welcome back to sign in. As a returning customer, you have access to your previously saved all information."}
          </p>
        </div>
        <div className="flex flex-col gap-5 ">
          {isRegister && (
            <div className="flex gap-5 w-[480px]">
              <InputField
                value={payload.firstname}
                setValue={setPayload}
                nameKey="firstname"
                icon={<FiUser />}
              />
              <InputField
                value={payload.lastname}
                setValue={setPayload}
                nameKey="lastname"
                icon={<FiUser />}
              />
            </div>
          )}
          <InputField
            value={payload.email}
            setValue={setPayload}
            nameKey="email"
            icon={<HiOutlineMail />}
            w={480}
          />
          {isRegister && (
            <InputField
              value={payload.mobile}
              setValue={setPayload}
              nameKey="mobile"
              icon={<RiPhoneFill />}
              w={480}
            />
          )}
          <InputField
            value={payload.password}
            setValue={setPayload}
            nameKey="password"
            icon={<BiLock />}
            w={480}
            type="password"
          />

          <div className="flex justify-between text-[#0071DC] text-[14px] font-medium">
            {!isRegister && (
              <span className="cursor-pointer">Forgot your account ?</span>
            )}
            {isRegister ? (
              <span
                className="cursor-pointer"
                onClick={() => setIsRegister(false)}
              >
                Back Home
              </span>
            ) : (
              <span
                className="cursor-pointer"
                onClick={() => setIsRegister(true)}
              >
                Create Account
              </span>
            )}
          </div>
          <Button
            handleOnClick={handleSubmit}
            name={isRegister ? "Sign Up" : "Login"}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
