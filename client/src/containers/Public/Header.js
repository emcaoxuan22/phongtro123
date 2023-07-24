import React, { useCallback } from "react";
import logo from "../../assets/logo.png";
import Button from "../../components/Button";
import icons  from "../../ultills/icons";
import { useNavigate } from "react-router-dom";
import { path } from "../../ultills/constant";
import { Link } from "react-router-dom";

const {  AiOutlinePlusCircle } = icons
function Header() {
    const navigate = useNavigate()
    const goLogin = useCallback((flag) => {
        navigate(path.LOGIN, {state: {flag}})
    }, [])

  return (
    <div className="w-3/5 flex items-center justify-between">
        <Link to={"/"}>
        <img
        src={logo}
        alt="logo"
        className="w-[240px] h-[70px] object-contain"
      />
        </Link>
      
      
      <div className="flex">
        <small>Phongtro123.com xin chào !</small>
        <Button
          text={"Đăng nhập"}
          textColor="text-white"
          bgColor="bg-[#3961fb]"
          onClick={() => goLogin(false)}
        />
        <Button
          text={"Đăng ký"}
          textColor="text-white"
          bgColor="bg-[#3961fb]"
          onClick={()=>goLogin(true)}
        />
        <Button
          text={'Đăng tin mới'}
          textColor='text-white'
          bgColor='bg-[#f73859]'
          IcAfter={AiOutlinePlusCircle}
        />
      </div>
    </div>
  );
}

export default Header;
