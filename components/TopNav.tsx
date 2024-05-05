import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import sunflower from "/public/sunflower.png"
import { motion } from "framer-motion"

type NoProps={}

const TopNav: React.FC<NoProps> = () => {
    return (
        <div className='mb-5 grid grid-cols-2 min-h-16 content-center'>
            <Link href={"/"} className='justify-self-start p-5 ml-5'>
                <Image className='transition ease-in-out delay-50  hover:scale-125 duration-300' src={sunflower} alt="sunflower icon" width={50} height={50}/>
            </Link>
                <Link href={'/o-mnie'} className='p-5 mr-5 justify-self-end self-center font-hs text-2xl font-semibold hover:underline decoration-cyan-300'>
                    O mnie
                </Link>
        </div>
    )
}    

export default TopNav