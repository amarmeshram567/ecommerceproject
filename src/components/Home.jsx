import React from 'react';
import { NavLink } from 'react-router-dom';
import Basic from './Basic';

const Home = () => {


  return (

    <>

    <div className="bg-[url('https://img.freepik.com/free-photo/view-cartoon-character-shopping_23-2151656738.jpg?t=st=1746127360~exp=1746130960~hmac=766848e3df290aa723c62637ad3a64e1dd9784a9b96d754d3c5866910256307c&w=1380')] bg-cover bg-center h-screen  w-full flex flex-col justify-end text-center p-3 pb-3">
        <div>
            <h1>Welcome to Your Ultimate Shopping Destination
                Discover the latest trends and timeless classics.
                From fashion to electronics – we’ve got it all.
                Unbeatable prices, exclusive deals, and premium quality.
                Shop with confidence, backed by trusted brands.
                Easy returns, secure payments, and lightning-fast delivery.
                Designed for your lifestyle, built for your comfort.
                Let your cart do the walking – we handle the rest.
                Because you deserve better shopping, every day.
                Start exploring now – your next favorite find is just a click away.
            </h1>
            <NavLink to="/product">
                <button  className="mt-4 px-6 py-3 bg-pink-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-pink-700 transition duration-300 mb-4">
                    Shop Now
                </button>
            </NavLink>
           

        </div>
    </div>


    <Basic/>
    </>
  );
}

export default Home;
