import { Holtwood_One_SC } from "next/font/google";
import { TfiLayoutMenuFull } from "react-icons/tfi";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";

const MenuItem = () => {
    return (
        <div>
            <div>
                <ul className='lg:flex grid md:grid-cols-8 text-[14px] items-center justify-center gap-1'>
                    <li className="bg-slate-300 px-3 items-center justify-center gap-1 py-1 flex rounded-full"><TfiLayoutMenuFull/> Filters</li>
                    <li className='rounded-full hover:bg-black hover:text-white hover:cursor-pointer border-solid border-[1px]  border-gray-600 px-3 py-1'>All</li>
                    <li   className='rounded-full hover:bg-black hover:text-white hover:cursor-pointer border-solid border-[1px]  border-gray-600 px-3 py-1'>New</li>
                    <li   className='rounded-full hover:bg-black hover:text-white hover:cursor-pointer border-solid border-[1px]  border-gray-600 px-3 py-1'>Popular</li>
                    <li   className='rounded-full hover:bg-black hover:text-white hover:cursor-pointer border-solid border-[1px]  border-gray-600 px-3 py-1'>Onboarding</li>
                    <li   className='rounded-full hover:bg-black hover:text-white hover:cursor-pointer border-solid border-[1px]  border-gray-600 px-3 py-1'>Auth</li>
                    <li   className='rounded-full hover:bg-black hover:text-white hover:cursor-pointer border-solid border-[1px]  border-gray-600 px-3 py-1'>Shop</li>
                    <li  className='rounded-full hover:bg-black hover:text-white hover:cursor-pointer border-solid border-[1px]  border-gray-600 px-3 py-1'>Chat</li>
                    <li   className='rounded-full hover:bg-black hover:text-white hover:cursor-pointer border-solid border-[1px]  border-gray-600 px-3 py-1'>TOP Verification</li>
                    <li  className='rounded-full  hover:bg-black hover:text-white hover:cursor-pointer border-solid border-[1px]  border-gray-600 px-3 py-1'>Dashboard</li>
                    <li  className='rounded-full hover:bg-black hover:text-white hover:cursor-pointer border-solid border-[1px]  border-gray-600 px-3 py-1'>Food</li>
                    <li className='rounded-full hover:bg-black hover:text-white hover:cursor-pointer border-solid border-[1px]  border-gray-600 px-3 py-1'>Restaurent</li>
                    <li  className='rounded-full hover:bg-black hover:text-white hover:cursor-pointer border-solid border-[1px]  border-gray-600 px-3 py-1'>Fitness</li>
                  <li className="text-2xl hover:bg-black hover:text-white hover:cursor-pointer"><HiOutlineArrowSmallRight/></li>
                </ul>
            </div>
        </div>
    );
};

export default MenuItem;