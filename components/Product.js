import { useState } from "react";
import { formatCurrencyString } from "use-shopping-cart";
import { useShoppingCart } from "use-shopping-cart";
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Product({ product }) {
  const { title, price, image } = product;
  const [quantity, setQuantity] = useState(1);
  

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const { addItem } = useShoppingCart();

  const addToCart = () => {
    addItem(product, { count: quantity });
    setQuantity(1);
    toast.success(`Product added to cart successfully!`, {
      position: "bottom-left",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: 0,
transition: Slide,
      style: {
        backgroundColor: 'white',
        color: 'black',
      }
      });
  };


  return (

    
  <article>
        <div className='mt-16 '>
        <div  className="mx-10  md:ml-14 md:mb-3 gap-14 md:flex md:flex-wrap">
            <div className="pt-14 bg-gray-50 ">
                <div className=' flex items-center justify-center'>
                     
            <img
            src={image}
            alt=""
            className="object-cover h-[200px]  max-w-[300px] "
            />
            </div>

            <div className=' bg-gray-400/80 mt-10 mb-10 md:mb-0'>

            <h2 className="font-extrabold text-base ml-3 pt-5 ">{title}</h2>
           
            <div className="flex justify-around items-center mt-4 mb-2 ">
        <button
          onClick={decreaseQuantity}
          className="hover:text-emerald-500 hover:bg-emerald-50 w-8 h-8 rounded-full transition-colors duration-500"
        >
          -
        </button>
        <span className="w-10 text-center rounded-md mx-3">{quantity}</span>
        <button
          onClick={increaseQuantity}
          className="hover:text-emerald-500 hover:bg-emerald-50 w-8 h-8 rounded-full transition-colors duration-500"
        >
          +
        </button>
      </div>
      <div className='flex gap-[130px] mx-1 '>
            <p className='   text-lg font-medium '>${price}</p>
            <button
						type='button'
						className=' bg-yellow-800 text-black font-semibold py-2 px-4 rounded hover:bg-yellow-600 hover:text-white'
						onClick={() => addToCart()}
					>
						Add to Cart
					</button>
          </div>

           </div>

            </div>
          </div>
        </div>
        <ToastContainer />
    </article>

  )
}
