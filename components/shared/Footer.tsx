"use client"
import { Parallax } from 'react-parallax';
import { Jost } from 'next/font/google';
import { cn } from '@/lib/utils';
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiClock2, CiLocationOn, CiMail } from 'react-icons/ci';
import { BsTelephone } from 'react-icons/bs';
import { SlLocationPin } from 'react-icons/sl';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
const font = Jost({
    subsets: ["latin"],
    weight: ["400"]
})



import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-rotate.css';
import 'lightgallery/css/lg-share.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgRotate from 'lightgallery/plugins/rotate';
import lgShare from 'lightgallery/plugins/share';


import Link from 'next/link';
import Image from 'next/image';


const Footer = () => {
    const fakeDb = [
        {
            id: 1,
            image: `https://i.ibb.co/jRb8zVb/gall1.jpg`
        },
        {
            id: 2,
            image: `https://i.ibb.co/47m8PtW/gall2.jpg`
        },
        {
            id: 3,
            image: `https://i.ibb.co/cyCJ8sn/gall3.jpg`
        },
        {
            id: 4,
            image: `https://i.ibb.co/LCpcPBB/gall4.jpg`
        },
        {
            id: 5,
            image: `https://i.ibb.co/yysMBKy/gall5.jpg`
        },
        {
            id: 6,
            image: `https://i.ibb.co/W3zMG9Z/gall6.jpg`
        },
        {
            id: 7,
            image: `https://i.ibb.co/tK69fLH/gall7.jpg`
        },
        {
            id: 8,
            image: `https://i.ibb.co/tqchKhn/gall8.jpg`
        },
    ]
    return (
        <Parallax
            style={{ width: '100%' }}
            blur={{ min: -15, max: 15 }}
            bgImage={`https://i.ibb.co/LJvNBqb/personal.jpg`}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className={cn('grid grid-cols-1 lg:grid-cols-4 gap-10 bg-black bg-opacity-70 p-20 text-white tracking-widest', font.className)}>
                <div className="">
                    <h2 className='text-2xl font-bold'>ABOUT US</h2>
                    <p className='leading-8 my-5'>Sed sit amet nisl in velit viverra bibendum in ac nisi. Etiam efficitur dui vitae sem rutrum, id pretium nunc varius. Vestibulum hendrerit malesuada.</p>
                    <div className="flex">
                        <span className='p-3 bg-[#4267B2] text-2xl'><FaFacebookF /></span>
                        <span className='p-3 bg-[#1DA1F2] text-2xl'><FaTwitter /></span>
                        <span className='p-3 bg-[#FF0000] text-2xl'><FaYoutube /></span>
                    </div>
                </div>
                <div className="">
                    <h2 className='text-2xl font-bold'>ALL CONTACTS</h2>
                    <ul className='menu'>
                        <li className='flex items-center my-5'>
                            <SlLocationPin className='text-xl' />
                            <span className='ml-2'>111 8th Ave, New York U.S.A.</span>
                        </li>
                        <li className='flex items-center my-5'>
                            <BsTelephone className='text-xl' />
                            <span className='ml-2'>Office +1-202-555-0153</span>
                        </li>
                        <li className='flex items-center my-5'>
                            <CiMail className='text-xl' />
                            <span className='ml-2'>lorem@ipsum.com</span>
                        </li>
                        <li className='flex items-center my-5'>
                            <CiClock2 className='text-xl' />
                            <span className='ml-2'>08 am - 06 pm Sunday closed</span>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <h2 className='text-2xl font-bold'>SUBSCRIBE</h2>
                    <p className='leading-8 my-5'>Sed sit amet nisl in velit viverra bibendum in ac nisi. Etiam efficitur dui vitae sem</p>
                    <div className="">
                        <Input
                            type='email'
                            className='bg-white text-black px-2'
                            placeholder='Enter Your Email'
                        />
                        <Button
                            type='submit'
                            size="lg"
                            variant="outline"
                            className='bg-[#22B6AF] border-none font-bold my-5 tracking-widest'
                        >
                            SEND
                        </Button>
                    </div>
                </div>
                <div className="">
                    <h2 className='text-2xl font-bold mb-5'>GALLERY</h2>
                    <LightGallery
                        speed={500}
                        plugins={[lgThumbnail, lgZoom, lgRotate, lgShare]}
                        elementClassNames='grid grid-cols-4 gap-5'
                    >
                        {
                            fakeDb?.map(item =>
                                <Link key={item.id} href={item.image}>
                                    <Image src={item.image} width={100} height={100} alt='sevice image' />
                                </Link>
                            )
                        }
                    </LightGallery>
                </div>
            </div>
        </Parallax>
    );
};

export default Footer;
