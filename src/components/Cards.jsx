import React, { useContext, useState } from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {FaHeart} from "react-icons/fa"
import { AuthContext } from '../Contexts/AuthProvider';
import Swal from 'sweetalert2'

const Cards = ({ item }) => {

  const {name, image, price, recipe, _id} = item;
    const [isHeartFillted , setIsHeartFillted] = useState(false);
    const {user} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();


// add to cart btn
    const handleAddtoCart = (item) =>{
     if(user && user?.email){
      const cartItem = {menuItemId: _id, name, quantity: 1, image, price, email: user.email};
      fetch("http://localhost:6001/carts" ,{
        method:"POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cartItem)

      }).then(res => res.json()).then(data =>{
        // console.log(data);
        if(data.insertedId){
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Added to the cart",
            showConfirmButton: false,
            timer: 1500
          });
        }
        
      })
     }else{
      Swal.fire({
        title: "Please Login",
        text: "Without an account can't able to add products",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "SignUp"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/signup', {state: {from: location}})
        }
      });
     }
    }

    const handleHeartclick = () => {
        setIsHeartFillted(!isHeartFillted)
    }
  return (
        <div to={`/menu/${item._id}`} className="card bg-base-100 w-80 shadow-xl relative">
       <div className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-green ${isHeartFillted ? "text-rose-500" : "text-white"}`}
       onClick={handleHeartclick}
       >
        <FaHeart className='h-5 w-5 cursor-pointer'/>
       </div>

 <Link to={`/menu/${item._id}`}>
 <figure>
    <img
      src={item.image}
      alt="Shoes" 
      className='hover:scale-105 transition-all duration-200 md:h-72'
      />
  </figure></Link>

  <div className="card-body">
    <Link><h2 className="card-title">{item.name}</h2></Link>
    <p>Description of the items</p>
    <div className="card-actions justify-between items-center mt-2">
        <h5 className='font-semibold'><span className='text-sm text-red'>$</span>{item.price}</h5>
      <button className="btn bg-green text-white" onClick={() => handleAddtoCart(item)}>Add to Cart</button>
    </div>
  </div>
</div>
  );
};

export default Cards;
