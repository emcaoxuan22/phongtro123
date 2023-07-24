import React, { useState, useEffect } from "react";
import { Button, InputForm } from "../../components";
import { useLocation } from "react-router-dom";
// import { apiRegister } from "../../services/auth";
import * as actions from "../../store/action"
import {useDispatch} from 'react-redux'

function Login() {
  const location = useLocation()
  const dispatch = useDispatch()
  const [isRegister, setIsRegister] = useState(location.state?.flag);
  const [payload, setPayload] = useState({
    phone: '',
    password: '', 
    name: ''
  })
  useEffect(()=>{
    setIsRegister(location.state?.flag)
  }, [location.state?.flag])

  const handleSubmit = async() => {
    // const response = await apiRegister(payload)
    dispatch(actions.register(payload))
  }
  dispatch(actions.register(payload))
  return (
    <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm">
      <h3 className="font-semibold text-2xl">
        {isRegister ? "Đăng ký tài khoản" : "Đăng nhập"}
      </h3>
      <div className="w-full flex flex-col gap-3">
        {isRegister && <InputForm label={"Họ Tên"} value={payload.name} setValue={setPayload} type={"name"} />}
        <InputForm label={"Tên Đăng Nhập"} value={payload.phone} setValue={setPayload} type={"phone"} />
        <InputForm label={"Mật Khẩu"} value={payload.password} setValue={setPayload} type={"password"} />
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
            Bạn đã có tài khoản? <span onClick={()=>setIsRegister(false)} className="text-blue-500 hover:underline cursor-pointer">Đăng nhập ngay nhé</span>
          </small>
        ) : (
          <>
            <small className="text-[blue] hover:text-[red] cursor-pointer">
              Bạn quên mật khẩu
            </small>
            <small className="text-[blue] hover:text-[red] cursor-pointer" onClick={() => setIsRegister(true)}> 
              Tạo tài khoản mới
            </small>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
