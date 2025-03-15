import Link from 'next/link';
import Image from './Image';

const PopularTag = () => {
    return (
        <div className='p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4'>
            <h1 className='text-xl font-bold text-textGrayLight'>What's Happening</h1>
            {/*Trands Event*/}
            <div className='flex gap-4'>
                
                <div className='relative w-20 h-20 rounded-xl overflow-hidden'>
                    <Image path='general/post.jpeg' alt='enent' w={120} h={120} tr={true} className=''/>
                </div>
                
                <div className='flex-1'>
                    <h1 className='fond-bold text-textGrayLight'>Nodal v Federer Grand Slam</h1>
                    <span className='text-sm text-textGray'>Last Night</span>
                </div>
                </div>  
               {/*Topics*/}
               <div className=''>
                <div className='flex content-center justify-between'>
                    <span className='text-textGray font-sm'>Technology . Trending</span>
                    <Image path='icons/infoMore.svg' alt='' w={16} h={16} className=''/>
                </div>
                <h2 className='text-textGrayLight font-bold'>OpenAI</h2>
                <span className='text-textGray text-sm'>20k posts</span>
               </div>
               {/*Topics*/}
               <div className=''>
                <div className='flex content-center justify-between'>
                    <span className='text-textGray font-sm'>Technology . Trending</span>
                    <Image path='icons/infoMore.svg' alt='' w={16} h={16} className=''/>
                </div>
                <h2 className='text-textGrayLight font-bold'>OpenAI</h2>
                <span className='text-textGray text-sm'>20k posts</span>
               </div>
               
               <Link href={'/'} className='text-iconBlue'>Show more</Link>


        </div>
    );
};

export default PopularTag;