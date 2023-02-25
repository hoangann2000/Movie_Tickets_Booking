// import React, { Fragment, useEffect } from 'react'
import "./Header.scss"
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { DANG_XUAT } from '../../Redux/action/Type/TypeND'
import { QLNDReducer } from '../../Redux/Reducers/NDReducers'
import ProFileUser from "../../Page/User/ProFileUser"
import React, { useState, Fragment } from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.js'
export default function Header() {

    let { UserLogin } = useSelector((state) => state.QLNDReducer)
    const dispatch = useDispatch()
    // console.log(UserLogin, "lấy ok")
    const Modal = () => {
        Swal.fire({
            title: 'Vui lòng xác nhận đặt vé ?',
            icon: "question",
            showDenyButton: true,
            confirmButtonColor: `#3085d6`,
            denyButtonText: `Hủy`,
            confirmButtonText: `Xác Nhận`,
        })
    };
    return (
        <nav className="HEADER">
            <div className='header_content'>
                <div className='header_left'>
                    <a href="">
                        <img className='img-fluid w-20' src="../img/logomovie.png" alt="" />
                    </a>
                </div>
                <div className='header_center'>
                    <a className="center_title" href="/">Trang Chủ</a>
                    <a className="center_title" href="#hethongrap" >Hệ Thống Rạp</a>
                    <a className="center_title" href="#news" >Tin Tức</a>
                    <a className="center_title" href="#footer" >Liên Hệ</a>
                </div>
                <div className='header_right'>
                    {UserLogin !== null ? <ProFileUser UserLogin={UserLogin} /> : <Fragment>
                        <NavLink className="title_login" to="/login">Đăng Nhập</NavLink>
                        <NavLink onClick={()=> {
                               Swal.fire({
                                    position: 'top-center',
                                    icon: 'info',
                                    title: 'Hello bạn, mình cung cấp cho bạn tài khoản để dễ test nhé ! User khách hàng: hoangan2312 Pass: 123456 admin: hoangann2000 Pass: 123456',
                                    showConfirmButton: true,
                                });
                        }} className="title_login" to="/register">Đăng Ký</NavLink>
                    </Fragment>}
                </div>
            </div>
        </nav >
    )
}
