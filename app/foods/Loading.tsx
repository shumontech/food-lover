import React from 'react';
import FoodCardSkeleton from '../component/skeletons/FoodCardSkeleton';

const Loading = () => {
    return (
        <div className='grid grid-cols-4 gap-5 px-5 my-5 mx-auto'>
            {[...Array(12).map((_,index)=><FoodCardSkeleton key={index}></FoodCardSkeleton>)]}
            
        </div>
    );
};

export default Loading;