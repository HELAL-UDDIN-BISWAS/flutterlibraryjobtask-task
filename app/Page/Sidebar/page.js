'use client'
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
import { Avatar, Button, Divider, Icon, Input, Sidebar, Typography } from 'keep-react'


const SidebarSection = () => {
    return (
        <div className='max-w-[180px]'>
             <Sidebar>
      <Sidebar.Header className="space-y-2.5">
        <div className="flex items-center justify-between">
          <Typography variant="heading-5" className="font-bold text-primary-500">
            Keep
          </Typography>
          <Button variant="outline" shape="icon" color="primary" className="border-none">
            <List size={24} />
          </Button>
        </div>
   
       
      </Sidebar.Header>
      <Sidebar.Body>
        <Sidebar.Item>
          <SquaresFour size={24} />
          Profile
        </Sidebar.Item>
        <Sidebar.Item>
          <ShoppingCart size={24} />
          Products
        </Sidebar.Item>
        <Sidebar.Item>
          <ArchiveTray size={24} />
          Download
        </Sidebar.Item>
        <Sidebar.Item>
          <Chat size={24} />
          Message
        </Sidebar.Item>
        <Sidebar.Item>
          <Gear size={24} />
          Settings
        </Sidebar.Item>
        <Sidebar.Item>
          <Users size={24} />
          Users
        </Sidebar.Item>
        <Sidebar.Item>
          <SignIn size={24} />
          Log Out
        </Sidebar.Item>
      </Sidebar.Body>
      <Divider className="my-3" />
      <Sidebar.Footer className="flex items-center gap-2">
       
      </Sidebar.Footer>
    </Sidebar>
        </div>
    );
};

export default SidebarSection;