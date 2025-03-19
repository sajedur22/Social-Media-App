import Feed from '@/components/Feed';
import Image from '@/components/Image';
import Link from 'next/link';
import React from 'react';

const Page = () => {
    return (
        <div>
            {/*profile title */}
            <div className='flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000084]'>
                <Link href={'/'}><Image path='icons/back.svg' alt='back' w={20} h={20} className=''/></Link>
                <h1 className='font-bold text-lg'>Shakil dev</h1>
            </div>
            
            {/*info */}
            <div>
               {/*cover and avater */}
               <div className='relative w-full'>
                {/*cover */}
                <div className='w-full aspect-[3/1] relative'>
                    <Image path='general/cover.jpg' alt='' w={600} h={200} className=''/>
            </div>
                 {/*avatar */}           
                <div className='w-1/5 aspect-square rounded-full overflow-hidden border-4 border-black bg-gray-300 absolute left-4 -translate-y-1/2'>
                <Image path='general/avatar.png' alt='' w={100} h={100} className='' tr={true}/>                   
                </div>
               </div>
               
               <div className='flex items-center justify-end gap-2 p-2 w-full'>
                <div className='w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer'>
                    <Image path='icons/explore.svg' alt='more' w={20} h={20} className=''/>
                </div>
                <div className='w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer'>
                    <Image path='icons/message.svg' alt='more' w={20} h={20} className=''/>
                </div>
                <div className='w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer'>
                    <Image path='icons/more.svg' alt='more' w={20} h={20} className=''/>
                </div>
                <button className='py-1.5 px-8 bg-transparent border-[1px] border-gray-50 rounded-full font-bold text-white'>Follow</button>
               </div>
               {/*user details */}
               <div className='p-4 flex flex-col gap-2'>
                {/*username & handle */}
                <div className=''>
                    <h1 className='font-bold text-2xl'>shakil dev</h1>
                    <span className='text-textGray text-sm'>@shakilDev</span>
                </div>
                <p>Read Code YouTube Channel</p>
                {/*job & location & date */}
                <div className='flex gap-4 text-textGray text-[15px]'>
                    <div className='flex items-center gap-2'>
                        <Image path='icons/userLocation.svg' alt='location' w={20} h={20} className=''/>
                        <span>Dhaka</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Image path='icons/date.svg' alt='date' w={20} h={20} className=''/>
                        <span>Joined May 2024</span>
                    </div>
                </div>
                {/*flolowing & followers */}
                <div className='flex gap-4'>
                    <div className='flex items-center gap-2'>
                        <span className='font-bold'>100</span>
                        <span className='text-textGray text-[15px]'>Followers</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span className='font-bold'>100</span>
                        <span className='text-textGray text-[15px]'>Followers</span>
                    </div>
                </div>

               </div>
             
            </div>
            {/*feed */}
            <Feed/>

        </div>
    );
};

export default Page;