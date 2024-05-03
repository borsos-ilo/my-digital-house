import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import sunflower from "/public/sunflower.png"

type NoProps={}

const TopNav: React.FC<NoProps> = () => {
    return (
        <div className='mb-10 grid grid-cols-2 max-h-8 border'>
            <Link href={"/"}>
                <Image src={sunflower} alt="sunflower icon" width={30} height={30}/>
            </Link>
            <Link href={'/o-mnie'} className='font-pd'>
                O mnie
            </Link>
        </div>
    )
}    

export default TopNav