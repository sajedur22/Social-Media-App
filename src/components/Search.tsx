import React from 'react';
import Image from './Image';

const Search = () => {
    return (
        <div className='bg-inputGray py-2 px-4 flex items-center gap-4 border-borderGray border-[1px] rounded-full'>
            <Image path='icons/explore.svg' alt='search' w={16} h={16} className=''/>
            <input type='text' placeholder='Search' className='bg-transparent outline-none placeholder:text-textGray'/>
        </div>
    );
};

export default Search;