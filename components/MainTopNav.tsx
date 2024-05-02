import Link from 'next/link';
import React from 'react';

type NoProps={}

const MainTopNav: React.FC<NoProps> = () => {
    return (
        <div className='mb-10'>
            <Link href={'/o-mnie'} className='font-pd'>
                O mnie
            </Link>
        </div>
    )
}    

export default MainTopNav