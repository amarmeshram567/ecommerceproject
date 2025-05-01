import React from 'react';

const Basic = () => {

    const trendingData = [
        {
            id: 1,
            img: "https://img.freepik.com/free-photo/shopping-trolley-gift-near-modern-laptop_23-2148015448.jpg?t=st=1746129760~exp=1746133360~hmac=9ff89186e4105d048655117101d2021652de40b23e3def81a29df5dbf6cf441a&w=740"
        }, 
        {   id: 2,
            img: "https://img.freepik.com/free-photo/present-boxes-near-toy-hearts_23-2148015277.jpg?t=st=1746129806~exp=1746133406~hmac=e18c1ea12973f63fe1997437ae1b69734f2db0f6ddf50c8817774a7aa5b7749c&w=740"
        },
        {   id: 3,
            img: "https://img.freepik.com/premium-photo/smartphone-with-blank-screen-envelope-red-rose-gift-knitted-hearts-pink-background-copy-space-flat-lay-top-view_261761-2671.jpg?w=740"
        },
        {   id: 4,
            img: "https://img.freepik.com/premium-photo/minimalistic-scene-from-wooden-podium-light-blue-background-with-flowers_261761-2513.jpg?w=740"
        },
    ]

   

  return (
    <>
    <div className='flex flex-col items-center justify-center p-4'>
        <h1 className='text-4xl m-3 text-red-500 hover:text-amber-200 underline'>Trending Now</h1>
        <p className='text-gray-400 items-center'>Style that speaks louder than words.
Top picks flying off the shelves.
Curated for your vibe, delivered to your door.
Don’t miss out — shop the hype today!</p>
    </div>
    <div className='flex flex-wrap'>
        {trendingData?.map((data, index) => (
            
            <ul key={data?.id} className='p-1 flex  justify-center'>
                <div className='m-1'>
                    <img
                        src={data?.img}
                        alt=''
                        className='w-90 rounded-4xl'
                    />
                
                </div>
            </ul>
        
        ))}
    </div>
    </>
  );
}

export default Basic;
