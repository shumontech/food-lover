import React from 'react';
import FoodCard from '../component/FoodCart';
import Loading from './Loading';

const getFoods = async()=>{
    const res = await fetch("https://taxi-kitchen-api.vercel.app/api/v1/foods/random");
    const data= await res.json();
    await new Promise ((resolve)=>setTimeout(resolve,3000))
    return data.foods || []
}

const FoodPage =async () => {
    const foods = await getFoods();
    return (
        <div >
           <p className='text-2xl font-bold py-4'> Total <span className='text-amber-300'> {foods.length}</span> found</p>
           <div className="grid grid-cols-4 gap-5 px-5 my-5 mx-auto">

                {foods.map(food=><FoodCard key={food.id} food={food}></FoodCard>)}
               
            </div>
            
        </div>
    );
};

export default FoodPage;
