/** @format */
import loginImage from "../../assets/images/login.png";
import logoImage from "../../assets/images/IconLogo.png";
import icons from "../../ultils/icons";
import { toast } from "react-toastify";
import { useCallback, useEffect, useState } from "react";
import { InputField, Button } from "../../components";
import { apiLogin, apiRegister, apiForgotPassword } from "../../apis";
import swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import path from "../../ultils/path";
import { login } from "../../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { validate } from "../../ultils/helper";

const { HiOutlineMail, BiLock, FiUser, RiPhoneFill } = icons;
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isRegister, setIsRegister] = useState(false);
  const [isForgotPassWord, setIsForgotPassWord] = useState(false);
  const [email, setEmail] = useState("");
  const [invalidFields, setInvalidFields] = useState([]);
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
    const invalids = isRegister
      ? validate(payload, setInvalidFields)
      : validate(data, setInvalidFields);
    if (invalids === 0) {
      if (isRegister) {
        const rs = await apiRegister(payload);
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
            login({
              isLoggedIn: true,
              token: rs.accessToken,
              userData: rs.userData,
            })
          );
          navigate(`/${path.HOME}`);
        } else swal.fire("Oops!", rs?.mes, "error");
      }
    }
  }, [payload, isRegister]);

  const handleForgot = async () => {
    console.log(email);
    const response = await apiForgotPassword({ email });
    if (response?.success) toast.success(response.mes);
    else toast.info(response.mes);
  };

  useEffect(() => {
    resetPayload();
    setInvalidFields([]);
  }, [isRegister]);

  return (
    <div className="relative flex items-center justify-around h-screen">
      {isForgotPassWord && (
        <div className="absolute bg-white z-50 top-0 left-0 right-0 bottom-0 flex flex-col items-center pt-12 ">
          <div className="flex flex-col gap-4">
            <label htmlFor="email">Enter your email:</label>
            <input
              type="text"
              id="email"
              className=" w-[800px] pb-2 border-b border-solid outline-none placeholder:text-sm"
              placeholder="Exp:email@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <Button
                style="bg-blue-500 text-white w-[100px]"
                name="Submit"
                handleOnClick={() => handleForgot()}
              />
              <Button
                style="text-white bg-[#FFB700] w-[100px]"
                name="Back"
                handleOnClick={() => setIsForgotPassWord(false)}
              />
            </div>
          </div>
        </div>
      )}
      <div className="flex-1 flex flex-col justify-center items-center mx-[150px] ">
        <img src={loginImage} alt="login" />
        <p className="font-medium text-[18px] text-[#1A162E] leading-6 mt-8 text-center">
          The best of luxury brand values, high quality products, and innovative
          services
        </p>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center px-[130px]">
        <div className="flex gap-2 items-center mb-[50px]">
          <img
            className="w-[32px] h-[32px] object-contain"
            src={logoImage}
            alt="logo"
          />
          <p className="text-[18px] font-bold">grocerymart</p>
        </div>
        <div className="text-center mb-[60px]">
          <h1 className="text-[30px] font-medium mb-[10px] leading-6">
            {isRegister ? "Sign Up " : "Hello Again!"}
          </h1>
          <p className="text-[#9E9DA8] font-medium text-[14px] leading-6">
            {isRegister
              ? "Let’s create your account and Shop like a pro and save money."
              : "Welcome back to sign in. As a returning customer, you have access to your previously saved all information."}
          </p>
        </div>
        <div className="flex flex-col  ">
          {isRegister && (
            <div className="flex gap-5 w-[480px] mb-[30px]">
              <InputField
                value={payload.firstname}
                setValue={setPayload}
                nameKey="firstname"
                icon={<FiUser />}
                invalidFied={invalidFields}
                setInvalidField={setInvalidFields}
              />
              <InputField
                value={payload.lastname}
                setValue={setPayload}
                nameKey="lastname"
                icon={<FiUser />}
                invalidFied={invalidFields}
                setInvalidField={setInvalidFields}
              />
            </div>
          )}
          <InputField
            value={payload.email}
            setValue={setPayload}
            nameKey="email"
            icon={<HiOutlineMail />}
            w={480}
            style={"mb-[30px]"}
            invalidFied={invalidFields}
            setInvalidField={setInvalidFields}
          />
          {isRegister && (
            <InputField
              value={payload.mobile}
              setValue={setPayload}
              nameKey="mobile"
              icon={<RiPhoneFill />}
              w={480}
              style={"mb-[30px]"}
              invalidFied={invalidFields}
              setInvalidField={setInvalidFields}
            />
          )}
          <InputField
            value={payload.password}
            setValue={setPayload}
            nameKey="password"
            icon={<BiLock />}
            w={480}
            type="password"
            style={"mb-[20px]"}
            invalidFied={invalidFields}
            setInvalidField={setInvalidFields}
          />

          <div className="flex justify-between text-[#0071DC] text-[14px] font-medium mb-[50px]">
            {!isRegister && (
              <span
                className="cursor-pointer"
                onClick={() => setIsForgotPassWord(true)}
              >
                Forgot your account ?
              </span>
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
