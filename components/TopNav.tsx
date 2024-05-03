import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import sunflower from "/public/sunflower.png"

type NoProps={}

const TopNav: React.FC<NoProps> = () => {
    return (
        <div className='mb-5 grid grid-cols-2 min-h-16 content-center'>
            <Link href={"/"} className='justify-self-start p-5 ml-5'>
                <Image src={sunflower} alt="sunflower icon" width={50} height={50}/>
            </Link>
            <Link href={'/o-mnie'} className='p-5 mr-5 justify-self-end self-center font-vollkorn text-2xl font-semibold'>
                O mnie
            </Link>
        </div>
    )
}    

export default TopNav