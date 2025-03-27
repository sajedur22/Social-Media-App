import Comments from '@/components/Comments';
import Image from '@/components/Image';
import Post from '@/components/Post';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            <div className='flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000084]'>
                <Link href={'/'}><Image path='icons/back.svg' alt='back' w={20} h={20} className=''/></Link>
                <h1 className='font-bold text-lg'>post</h1>
            </div>
            <div>
                <Post type="status"/>
                <Comments/>
            </div>
        </div>
    );
};

export default page;