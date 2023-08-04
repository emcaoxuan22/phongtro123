import React, { useCallback, useState } from "react";
import logo from "../../assets/logo.png";
import Button from "../../components/Button";
import icons  from "../../ultills/icons";
import { useNavigate } from "react-router-dom";
import { path } from "../../ultills/constant";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import * as actions from "../../store/action"

const {  AiOutlinePlusCircle } = icons
function Header() {
    const {isLoggedIn} = useSelector(state => state.auth)
    const [test, setT                                                                                                                                                            est] = useState("longdzai")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const goLogin = useCallback((flag) => {
      console.log('use call back',test)
        navigate(path.LOGIN, {state: {flag}})
    }, [test])


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
        {!isLoggedIn && <div className="flex item-center gap-1">
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
        </div>}
        {isLoggedIn && <div className="flex item-center gap-1">
          <small>tên đang nhập ơ đây</small>
          <Button
            text={"đăng xuất"}
            textColor="text-white"
            bgColor="bg-[#3961fb]"
            onClick={() => {
            dispatch(actions.logout())
            }}
          />
          
        </div>}
        
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
