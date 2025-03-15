import Link from 'next/link';
import React from 'react';
import Image from './Image';

const Recommendation = () => {
    return (
        <div className='p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4'>
            {/* user card*/}
            <div className='flex items-center justify-between'>
                {/*image and user info */}
                <div className='flex items-end gap-2'>
                <div className='relative rounded-full overflow-hidden w-10 h-10'>
                    <Image path='general/cover.jpg' alt='enfelled' h={100} w={100} tr={true} className=''/>
                </div>
                <div className=''>
                    <h1 className='text-md font-bold'>shaba doe</h1>
                    <span className='text-md text-textGray'>@doe</span>
                </div>
                </div>
                <button className='py-2 px-4 rounded-full bg-white text-black font-semibold'>Follow</button>
            </div>
            <div className='flex items-center justify-between'>
                {/*image and user info */}
                <div className='flex items-end gap-2'>
                <div className='relative rounded-full overflow-hidden w-10 h-10'>
                    <Image path='general/cover.jpg' alt='enfelled' h={100} w={100} tr={true} className=''/>
                </div>
                <div className=''>
                    <h1 className='text-md font-bold'>shaba doe</h1>
                    <span className='text-md text-textGray'>@doe</span>
                </div>
                </div>
                <button className='py-2 px-4 rounded-full bg-white text-black font-semibold'>Follow</button>
            </div>
            <div className='flex items-center justify-between'>
                {/*image and user info */}
                <div className='flex items-end gap-2'>
                <div className='relative rounded-full overflow-hidden w-10 h-10'>
                    <Image path='general/cover.jpg' alt='enfelled' h={100} w={100} tr={true} className=''/>
                </div>
                <div className=''>
                    <h1 className='text-md font-bold'>shaba doe</h1>
                    <span className='text-md text-textGray'>@doe</span>
                </div>
                </div>
                <button className='py-2 px-4 rounded-full bg-white text-black font-semibold'>Follow</button>
            </div>
            
            
          
            <Link href={'/'} className='text-iconBlue'>Show more</Link>
        </div>
    );
};

export default Recommendation;