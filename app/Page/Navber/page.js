
"use client";
import { Navbar, Avatar, Button, Divider, Icon, Input, Sidebar, Typography } from "keep-react";
import Image from "next/image";
import {
  CaretDown,
  FacebookLogo,
  InstagramLogo,
  MagnifyingGlass,
  TwitterLogo,
} from "phosphor-react";
import { IoSunnyOutline } from "react-icons/io5";

export const NavbarComponent = () => {
  return (
    <Navbar fluid={true} className="!py-5 ">
      <Navbar.Container className="flex items-center justify-between">
        <fieldset className="relative max-w-md">
          <Input placeholder="Search here" className="ps-11" />
          <Icon>
            <MagnifyingGlass size={18} color="#AFBACA" />
          </Icon>
        </fieldset>

        <Navbar.Collapse
          collapseType="sidebar"
          className="fixed right-0 top-0 bg-white p-10 xl:!w-1/6 lg:!w-2/6 md:!w-1/2"
        >
          <Navbar.Container tag="ul" className="flex flex-col gap-5">
            <IoSunnyOutline className="text-xl hover:cursor-pointer" />
            <button className="rounded-lg border-solid border-[1px]  border-gray-600 px-3 py-1">Log in</button>
            <button className="rounded-lg border-solid border-[1px] bg-black text-white  border-gray-600 px-3 py-1">Get pro</button>
            <Navbar.Link linkName="News" className="!py-0" />
            <Navbar.Link linkName="Resources" className="!py-0" />
          </Navbar.Container>
        </Navbar.Collapse>
        <Navbar.Container className="flex gap-1">
          <Navbar.Toggle className="block mr-10" />
          
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-8"
          >
           <div className="flex gap-2 items-center justify-center ">
            <IoSunnyOutline className="text-xl hover:cursor-pointer" />
            <button className="rounded-lg border-solid border-[1px]  border-gray-600 px-3 py-1">Log in</button>
            <button className="rounded-lg border-solid border-[1px] bg-black text-white  border-gray-600 px-3 py-1">Get pro</button>
          </div>
          </Navbar.Container>
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>


  );
}
