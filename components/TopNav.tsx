import Link from 'next/link';
import React from 'react';

type NoProps={}

const TopNav: React.FC<NoProps> = () => {
    return (
        <div className='mb-10'>
            <Link href={'/'} className='font-pd'>
                Mój cyfrowy dom
            </Link>
        </div>
    )
}    

export default TopNav