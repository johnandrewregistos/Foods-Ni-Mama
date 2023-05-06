import React, { useState, useEffect } from 'react'
import {data} from '../data/data'

const Content = ({ addToCart, cart, count }) => {
  // console.log(data)
  const [foods, setFoods] = useState(data);

  // filter Type of food
  const filterType = (type) => {
    setFoods(
      data.filter((item) => {
        return item.type === type;
      })
    );
    // setCART([]); // Reset cart state to empty array
  };

  // filter drinks or fooda
  const filterFood = (food) => {
  setFoods(
    data.filter((item) => {
      return item.food === food;
    })
  );
  // setCART([]); // Reset cart state to empty array
};

  const [CART, setCART] = useState([])

  // + & - button
  useEffect(() => {
    setCART(cart)
  }, [cart])

  return (
    <div className='container mx-auto px-2 sm:px-0 bg-transparent flex justify-between items-start'>
      {/* images */}
      <div className='bg-black/60 rounded-t-xl mt-6 shadow-2xl w-4/6'>
        {/* filter type */}
        <div className='w-full flex flex-col px-2'>
          <h2 className='text-white text-lg font-bold py-3 '>Filter Our Menu</h2>
          {/* Filter Buttons */}
          
          <div className='flex flex-wrap justify-evenly items-center gap-2'>
          <button onClick={()=> setFoods(data)} className='text-white text-md md:text-xl'>All</button>
            <button onClick={()=> filterFood('food')} className="text-white text-md md:text-xl">Foods</button>
            <button onClick={()=> filterFood('drinks')} className="text-white text-md md:text-xl">Drinks</button>
            <button onClick={() => filterType('fastfood')} className='text-white text-md md:text-xl'>Fast Food</button>
            <button onClick={() => filterType('dessert')} className='text-white text-md md:text-xl'>Desserts</button>
            <button onClick={() => filterType('meal')} className='text-white text-md md:text-xl'>Meal</button>
          </div>

          {/* display foods */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-3'>
            {foods.map((item, index) => (
              <div className='w-34 h-50 rounded-t-lg hover:scale-110 shadow-2xl'  key={index}>
                <img src={item.url} alt={item.name} className='w-34 h-40 rounded-t-lg  object-fit' />
                <div className="flex flex-col">
                <p className='text-white font-semibold mt-1'>{item.name}</p>
                <p className='text-mainColor mt-1 font-semibold'>
                  $ <span>{item.price}</span>
                </p>
                <button onClick={() => addToCart(item)} className='text-white mt-1' id='add'>+ Add</button>
                </div>
              </div>
            ) )}
          </div>
        </div>
      </div>
      {/* orders */}
      <div className='bg-black/60 rounded-t-xl mt-6 py-3 px-2 shadow-2xl w-[32%] flex flex-col'>
        <h1 className='text-white text-lg font-bold'>Your Orders</h1>
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2" id="orders">
        {CART?.map((cartItem, cartindex) => {
          return (
            <div className="w-full flex flex-col justify-between items-center my-3" key={cartItem.id}>
              <img className='w-16 h-16 rounded-full' src={cartItem.url} alt={cartItem.name} />
              <p className='text-white my-2'>{cartItem.name}</p>
              <div className="w-full md:w-32 flex justify-between items-center">
              <button
              onClick={() => {
                const _CART = CART.map((item, index) => {
                    return cartindex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : window.location.reload() } : item
                })
                setCART(_CART)
            }}
              className="text-white">-</button>
              <p className='text-white'>{cartItem.quantity}</p>
              <button
              onClick={() => {
                const _CART = CART.map((item, index) => {
                  return cartindex === index ? { ...item, quantity: item.quantity + 1} : item
                })
                setCART(_CART)
              }}
              className="text-white">+</button>
              </div>
              
              <p className='text-white'>$ {cartItem.price * cartItem.quantity}</p>
            </div>
              )
            })
        
          }
        </div>
        <div className="flex justify-between items-center">
          <button onClick={() => {
            return count >= 1 ? (alert("Thank you for ordering.") || window.location.reload()) : (alert("Please order first."))
            }
          } className='text-white font-semibold'>Pay</button>
          <div className='flex justify-evenly w-[10rem]'>
            <p className='text-white'>Total <span> </span></p>
            <p className='text-white'> $ <span>{
              CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
              }</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content