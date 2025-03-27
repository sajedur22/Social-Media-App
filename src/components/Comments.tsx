import React from 'react';
import Post from './Post';
import Image from './Image';

const Comments = () => {
    return (
        <div>
            <form className='flex justify-between items-center gap-4 p-1'>
                <div className='relative w-10 h-10 rounded-full overflow-hidden'>
                    <Image path='general/avatar.png' alt='lamda dev' w={100} h={100} tr={true} className=''/>
                </div>
                <input type='text' className='flex-1 bg-transparent outline-none p-2 text-xl' placeholder='post your reply'/>
                <button className='py-2 px-4 font-bold bg-white text-black rounded-full'>reply</button>
            </form>
            <Post/>
        </div>
    );
};

export default Comments;