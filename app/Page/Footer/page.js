import Image from 'next/image';
import img from './../../../public/Image/logo (1).png'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaSquareFacebook } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className='my-5'>
            <div className='grid lg:grid-cols-2 justify-between mb-5'>
                <div className=' sm:text-center lg:text-left'>
                    <Image className='sm:items-center' src={img} />
                    <p className='text-[12px] my-2'>Beautifully designed, expertly crafted Flutter components and templates, to jumpstart <br/>
                        your projects and speed up your development process.</p>
                    <div className='flex gap-3'>
                        <FaXTwitter className='bg-black text-white text-4xl p-1 rounded-full'></FaXTwitter>
                        <FaLinkedin className='bg-black text-white text-4xl p-1 rounded-full'></FaLinkedin>
                        <LuInstagram className='bg-black text-white text-4xl p-1 rounded-full'></LuInstagram>
                        <FaSquareFacebook className='bg-black text-white text-4xl p-1 rounded-full'></FaSquareFacebook>
                    </div>             
                </div>
                <div className='items-end flex gap-5 justify-center'>
                    <ul>
                        <li className='text-black'>Explore</li>
                        <li className='text-slate-400'>Blog</li>
                        <li className='text-slate-400'>Templates</li>
                        <li className='text-slate-400'>Screens</li>
                        
                    </ul>
                    <ul>
                        <li>Support</li>
                        <li className='text-slate-400'>Pricing</li>
                        <li className='text-slate-400'>Become a sponso</li>
                        <li className='text-slate-400'>Hire top Flutter Devs</li>
                        
                    </ul>
                </div>
                
            </div>
            <hr className='my-5'/>
            <div className='flex justify-between text-[14px]'>
                <p>Copyright 2024 TheFlutterLibrary. All rights reserved.</p>
                <p>Privacy Policy | Terms & Conditions | Cookie Policy</p>
            </div>
        </div>
    );
};

export default Footer;