import Image from '@/components/Image';
import Link from 'next/link';
import React from 'react';

const Page = () => {
    return (
        <div>
            {/*profile title */}
            <div className=''>
                <Link href={'/'}><Image path='icons/back.svg' alt='back' w={20} h={20} className=''/></Link>
                <h1>Shakil dev</h1>
            </div>
        </div>
    );
};

export default Page;