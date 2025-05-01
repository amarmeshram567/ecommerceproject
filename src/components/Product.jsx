import React from 'react';

import { LiaRupeeSignSolid } from "react-icons/lia";
import productList from './data';


const Product = ({setProductId}) => {

    const addToCart = (id) => {
        setProductId(id);
    }

  return (
    <div className=' p-5 flex flex-wrap justify-center'>
        {
            productList?.map((product, index) => {
                return(
                        <div id={product?.id} className='shadow p-2 flex flex-col m-5 rounded cursor-pointer' onClick={() => addToCart(product?.id)}>
                            <img
                                src={product?.img}
                                alt=''
                                className='w-50 h-60'
                            />
                            <div className='text-shadow-green-50 flex flex-row  p-2 '>
                                <div>
                                    <p className='text-black font-semibold text-sm'>{product?.model}</p>
                                    <p className='text-gray-800 text-sm flex flex-row justify-start'><LiaRupeeSignSolid className='mt-1' /> <span>{product?.price}</span></p>
                                </div>               
                            </div>
                        </div>
                )
            })
        }    
    </div>
  );
}

export default Product;
