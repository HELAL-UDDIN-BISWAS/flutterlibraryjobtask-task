'use client'
import img from "./../../../public/Image/logo (1).png"
import {
  ArchiveTray,
  Chat,
  Gear,
  List,
  MagnifyingGlass,
  ShoppingCart,
  SignIn,
  SquaresFour,
  Users,
} from 'phosphor-react'
import { RiGlobalLine } from "react-icons/ri";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { Avatar, Button, Divider, Icon, Input, Sidebar, Typography } from 'keep-react'
import Image from "next/image";


const SidebarSection = () => {
  return (
    <div className='max-w-[180px]'>
      <Sidebar>
        <Sidebar.Header className="space-y-2.5">
          <div className="flex items-center justify-between">
            <Typography variant="heading-5" className="">
              <Image
                src={img} />
            </Typography>

          </div>


        </Sidebar.Header>
        <Sidebar.Body>
          <Sidebar.Item>
            <RiGlobalLine size={24} />
            Discover
          </Sidebar.Item>
          <Sidebar.Item>
            <MdOutlinePhoneAndroid size={24} />
            UI Kits
          </Sidebar.Item>
          <Sidebar.Item>
            <FaCode size={24} />
            Articles
          </Sidebar.Item>
          <Sidebar.Item>
            <Chat size={24} />
            Become Sponsor
          </Sidebar.Item>
          <Sidebar.Item>
            <Users size={24} />
            Hire Flutter Dev
          </Sidebar.Item>
        </Sidebar.Body>
        <Divider className="my-3" />
        <Sidebar.Footer className="flex items-center gap-2">
          <h3 className="text-xl my-2">All Screens</h3>


        </Sidebar.Footer>
        <div className="flex  my-1 justify-between">
          <p>Sign in</p>
          <p>10</p>
        </div>
        <div className="flex my-1 justify-between">
          <p>Chat</p>
          <p>5</p>
        </div>
        <div className="flex my-1 justify-between">
          <p>Onboarding</p>
          <p>18</p>
        </div>
        <div className="flex my-1 justify-between">
          <p>E-commerce</p>
          <p>9</p>
        </div>
        <div className="flex my-1 justify-between">
          <p>Checkout</p>
          <p>10</p>
        </div>
        <div className="flex my-1 justify-between">
          <p>Error</p>
          <p>16</p>
        </div>
      </Sidebar>

    </div>
  );
};

export default SidebarSection;