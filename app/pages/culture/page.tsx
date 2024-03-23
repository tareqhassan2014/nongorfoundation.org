import { Button } from '@/components/ui/button';
import { culture } from '@/public/Data/culture';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdKeyboardBackspace } from "react-icons/md";

const Culture = () => {
    const filterCulture = culture.filter(data => data.image)
    return (
        <div className='py-8 lg:py-16 space-y-10 lg:space-y-20 text-center max-w-7xl mx-auto px-2 lg:px-0'>
            <Link href={"/"}><button className='flex justify-start lg:text-3xl font-semibold border p-2 lg:p-4 rounded-full border-black'><MdKeyboardBackspace /></button></Link>
            {
                filterCulture.map(data => <div key={data.id}>
                    <h1 className='text-[#424242] text-5xl font-serif font-semibold mb-5'>{data.name}</h1>
                    {
                        data.image
                        &&
                        <Image src={data.image} alt='medical_help' height={550} width={950} className='max-w-60 md:max-w-2xl lg:max-w-5xl mx-auto border object-cover'></Image>
                    }
                    <p className='font-serif mt-3 font-semibold'>{data.details}</p>
                </div>)
            }
            <Button className='w-full py-8 rounded-2xl' variant={"custom"}>Donate Now</Button>
        </div>
    );
};

export default Culture;