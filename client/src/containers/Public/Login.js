import React, { useState, useEffect, useCallback } from "react";
import { Button, InputForm } from "../../components";
import { useLocation, useNavigate } from "react-router-dom";
import * as actions from "../../store/action";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isRegister, setIsRegister] = useState(location.state?.flag);
  const [invalidFields, setInvalidFields] = useState([]);
  const [payload, setPayload] = useState({
    phone: "",
    password: "",
    name: "",
  });
  const { isLoggedIn, msg, update } = useSelector((state) => state.auth);
  useEffect(() => {
    setIsRegister(location.state?.flag);
  }, [location.state?.flag]);

  useEffect(() => {
    isLoggedIn && navigate("/");
  }, [isLoggedIn]);

  useEffect(() => {
    msg && Swal.fire("Opp !", msg, "error");
  }, [msg, update]);
  const handleSubmit = async () => {
    let finalPayload = isRegister
      ? payload
      : {
          phone: payload.phone,
          password: payload.password,
        };
    let invalids = validate(finalPayload);
    if (invalids === 0) {
      isRegister
        ? dispatch(actions.register(payload))
        : dispatch(actions.login(payload));
    }
    setPayload({
      phone: "",
      password: "",
      name: "",
    });
  };

  const validate = (payload) => {
    let invalid = 0;
    const payloadList = Object.entries(payload);
    payloadList.forEach((item) => {
      if (item[1] === "") {
        setInvalidFields((prev) => [
          ...prev,
          {
            name: item[0],
            message: "ban khong duoc bo trong truong nay",
          },
        ]);
        invalid++;
      }
    });

    payloadList.forEach((item) => {
      switch (item[0]) {
        case "password":
          if (item[1].length < 6) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                message: "mat khau phai lon hon 6 ky tu",
              },
            ]);
            invalid++;
          }
          break;
        case "phone":
          if (!+item[1]) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                message: "so dien thoai khong hop le",
              },
            ]);
            invalid++;
          }
          break;
        default:
          break;
      }
    });
    return invalid;
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm">
        <h3 className="font-semibold text-2xl">
          {isRegister ? "Đăng ký tài khoản" : "Đăng nhập"}
        </h3>
        <div className="w-full flex flex-col gap-3">
          {isRegister && (
            <InputForm
              setInvalidFields={setInvalidFields}
              invalidFields={invalidFields}
              label={"Họ Tên"}
              value={payload.name}
              setValue={setPayload}
              keyPayload={"name"}
            />
          )}
          <InputForm
            setInvalidFields={setInvalidFields}
            invalidFields={invalidFields}
            label={"Tên Đăng Nhập"}
            value={payload.phone}
            setValue={setPayload}
            keyPayload={"phone"}
          />
          <InputForm
            setInvalidFields={setInvalidFields}
            invalidFields={invalidFields}
            label={"Mật Khẩu"}
            value={payload.password}
            setValue={setPayload}
            keyPayload={"password"}
            type={"password"}
          />
          <Button
            text={isRegister ? "Đăng ký" : "Đăng nhập"}
            bgColor="bg-[#3961fb]"
            textColor="text-white"
            fullWidth
            onClick={handleSubmit}
          />
        </div>
        <div className="mt-7 flex items-center justify-between">
          {isRegister ? (
            <small>
              Bạn đã có tài khoản?{" "}
              <span
                onClick={() => {
                  setIsRegister(false);
                  setPayload({
                    phone: "",
                    password: "",
                    name: "",
                  });
                }}
                className="text-blue-500 hover:underline cursor-pointer"
              >
                Đăng nhập ngay nhé
              </span>
            </small>
          ) : (
            <>
              <small className="text-[blue] hover:text-[red] cursor-pointer">
                Bạn quên mật khẩu
              </small>
              <small
                className="text-[blue] hover:text-[red] cursor-pointer"
                onClick={() => {
                  setIsRegister(true);
                  setPayload({
                    phone: "",
                    password: "",
                    name: "",
                  });
                }}
              >
                Tạo tài khoản mới
              </small>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
