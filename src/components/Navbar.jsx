import React, { Profiler, useContext, useEffect, useState } from 'react';
import logo from "../../public/images/home/category/[removal.ai]_4b16eca4-1d83-4370-96e7-7b1835dabf4a-just-eat-logo-2001 (1).png";
import { FaRegUser } from "react-icons/fa";
import Modal from './Modal';
import { AuthContext } from '../Contexts/AuthProvider';
import Profile from './MyProfile'; // Ensure correct import path
import { Link } from 'react-router-dom';
import useCart from '../hooks/useCart';


const Navbar = () => {
  const [isSticky, setSticky] = useState(false);

  const {user} = useContext(AuthContext);
  console.log(user)
  const [cart, refetch] = useCart();
  // console.log(cart);
// handle scrool function
  useEffect(()=>{
    const handleSrcoll =() =>{
      const offset = window.scrollY;
      if(offset>0){
        setSticky(true)
      }else{
        setSticky(false)
      }
    };
    window.addEventListener("scroll",handleSrcoll);
    return() =>{
    window.addEventListener("scroll",handleSrcoll);
    }
  },[])


  const navItems = (
    <><li><a href="/">Home</a></li><li>
      <details>
        <summary>Menu</summary>
        <ul className="dropdown">
        <li ><a href="/menu">All</a></li>
            <li><a href="#">Main Courses</a></li>
            <li><a href="#">Desserts</a></li>
            <li><a href="#">Beverages</a></li>
        </ul>
      </details>
    </li><li>
        <details>
          <summary>Services</summary>
          <ul className="dropdown">
          <li><a href="#">Online Order</a></li>
          <li><a href="#">Dining</a></li>
          <li><a href="#">Tracking Order</a></li>
          </ul>
        </details>
      </li><li><a href="#">Offers</a></li></>

    

  );
  return (
    <header className='max-w-screen-2x1 container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out'>
       <div className={`navbar x1:px-24 ${isSticky ? "shadow-md bg-base-100 transition-all duration-300 ease-in-out" : ""}`}>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
      </ul>
    </div>
    <a href='/'>
        <img src={logo} alt="" />
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navItems}
    </ul>
  </div>
  <div className="navbar-end">
   {/* search btn */}
   <button className="btn btn-ghost btn-circle hidden lg:flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </button>


    {/* cart items */}
    <Link to="cart-page">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle md:flex items-center justify-center">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-sm indicator-item">{cart.length || 0}</span>
        </div>
    </div>
    </Link>

    {/* login btn */}
    {
       user ? <Profile user={user}/> :<button 
      onClick={()=>document.getElementById('my_modal_5').showModal()}
      className="btn bg-orange-500 rounded-full px-6 text-white flex items-center gap-2">
      <FaRegUser/>Login
      </button>
    }

    <Modal/>
  </div>
</div>
    </header>
  )
}

export default Navbar
