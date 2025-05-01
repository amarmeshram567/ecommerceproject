import React from 'react';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import { LiaRupeeSignSolid } from "react-icons/lia";



const Cart = ({cartAllProduct, setCartAllProduct}) => {

    console.log("filtredcar", cartAllProduct)

    const handleIncrement = (id) => {
        setCartAllProduct((prevCart) =>
            prevCart.map((item) => 
                item?.id === id ? {...item, count: item?.count + 1} : item
            )
        );
    };

    const handleDecrement = (id) => {
        setCartAllProduct((prevCart) => 
            prevCart.map((item) => 
                item?.id === id && item.count > 1
                ? {...item, count: item?.count - 1}
                : item
            )
        )
    }

    const handleDeleteItem = (id) => {
        const filteredItem = cartAllProduct.filter((item) => item?.id !== id);
        setCartAllProduct(filteredItem)
    }


  return (
    <div>
      <div>
        {cartAllProduct?.map((product) => {
                return (
                    <div key={product?.id}>

                        <div className='flex flex-col justify-center px-3 pt-2.5'>
                            <div className='flex flex-row shadow m-4 p-4 rounded'>
                                <img className='w-60 h-70' src={product?.img} alt='' />
                                <div className='flex flex-col px-4 p-1'>
                                    <h1 className='text-green-800 text-2xl'>{product?.model}</h1>
                                    <div className='flex flex-row'>
                                        <p className='text-gray-600 mr-1'>{product?.brand}</p> | <p><p className='text-gray-600 ml-1'>{product?.type}</p>                                        </p>

                                    </div>
                                    <p className='text-red-800 mt-1 flex flex-row'><LiaRupeeSignSolid className='mt-1'/> <span>{product?.price}</span></p>
                                    <p className='text-amber-900 mt-2'>{product?.description}</p>
                                    <div className='flex flex-row justify-evenly items-center mt-3'>
                                        <button className='text-3xl text-blue-300' onClick={() => handleDecrement(product?.id)}>
                                            -
                                        </button>
                                        <p className='text-red-300 border h-8 w-8 p-1 text-center'>{product?.count}</p>
                                        <button className=' text-3xl text-yellow-300 ' onClick={() => handleIncrement(product?.id)}>
                                            +
                                        </button>
                                    </div>
                                    <div className='m-4 flex flex-row mt-5 justify-evenly'>
                                        <button  onClick={() => handleDeleteItem(product?.id)} className='border w-20 mr-3 bg-red-600 text-white rounded'>Delete</button>
                                        <button  className='border w-20 bg-green-600 text-white rounded'>Buy</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                
                );
            })}

            {cartAllProduct.length === 0 && (
                <div className='h-100 flex flex-col items-center justify-center'>
                    <img />
                    <p className='text-xl '>No Products Available in Cart</p>
                </div>
            )}
      </div>
    </div>
  );


}

export default Cart;
