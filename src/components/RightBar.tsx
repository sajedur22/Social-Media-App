import Search from './Search';
import PopularTag from './PopularTag';
import Recommendation from './Recommendation';
import Link from 'next/link';

const RightBar = () => {
    return (
        <div className='pt-4 flex flex-col gap-4 sticky top-0 h-max'>
            <Search/>
            <PopularTag/>
            <Recommendation/>
            <div className='text-textGray text-sm flex gap-x-4 flex-wrap'>
            <Link href={'/'} className=''>Terms of Service</Link>
            <Link href={'/'} className=''>Privace Policy</Link>
            <Link href={'/'} className=''>Cookie Policy</Link>
            <Link href={'/'} className=''>Accessibility</Link>
            <Link href={'/'} className=''>Ads info</Link>
                <span>© 2025 S Corp.</span>
            </div>
        </div>
    );
};

export default RightBar;