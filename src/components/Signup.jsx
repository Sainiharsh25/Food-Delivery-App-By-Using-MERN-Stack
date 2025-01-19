import React from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Modal from './Modal';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const {createUser ,login} = useContext(AuthContext);
    // redirecting to home page oe specific page
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";



      const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        createUser(email, password).then((result) => {
          // Signed up 
          const user = result.user;
          alert("Account creation Successfull done!")
          document.getElementById('my_modal_5').close()
        navigate(from, {replace: true})
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        })
      }
  return (
     
   <div className='max-w-md bg-white shadow w-full mx-auto flex items-center justify-center my-18 m-8'>
     <div className="modal-action flex-col justify-center mt-0">
    <form onSubmit={handleSubmit(onSubmit)} className="card-body" method='dialog'>
      <h3 className='font-bold text-lg'>Create a Account!</h3>

      {/* Email */}
      <div className="form-control mb-0">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="email" 
        placeholder="email" 
        className="input input-bordered" 
        {...register("email")}
        />
      </div>

      {/* password */}
      <div className="form-control mb-0 ">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input type="password" 
        placeholder="password" 
        className="input input-bordered" 
        {...register("password")}
         />
        <label className="label mt-4">
          <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
        </label>
      </div>
      {/* error  */}

      {/* login btn */}
      <div className="form-control ">
        <input type='submit' value="Signup" className="btn bg-orange-400 text-white"/>
      
      </div>

      <p className='text-center my-2'>Have an account? 
    <button to="/signup" className='underline text-red ml-1'
    onClick={()=>document.getElementById('my_modal_5').showModal()}
 
    >
    Login
      </button> 
      </p>

      <Link
      to="/"
        
        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    </form>
       {/* social sign in */}
    <div className='text-center space-x-3 mb-8'>
    <button className="btn btn-circle hover:bg-orange-400 hover:text-white">
    <FaGoogle />
    </button>
    <button className="btn btn-circle hover:bg-orange-400 hover:text-white">
    <FaFacebookF />
    </button><button className="btn btn-circle hover:bg-orange-400 hover:text-white">
    <FaGithub />
    </button>
    </div>
    </div>
    <Modal/>
   </div>
  )
}

export default Signup