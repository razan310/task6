import { LuSunDim } from 'react-icons/lu';
import { IoCloseOutline, IoMenu, IoMoonOutline } from 'react-icons/io5';
import { GoDotFill } from 'react-icons/go';

export const navItems = {
    logo: 'Your Name',
    items: ['Blog', 'Projects', 'About', 'Newsletter'],
    sun:<div className='flex items-center '>
        <LuSunDim className='text-3xl '/> 
        <GoDotFill className='text-3xl'/>
        </div>,
    moon:<div className='flex items-center '>
            <GoDotFill className='text-3xl mr-1'/>
            <IoMoonOutline  className='text-2xl'/>
        </div>,
    btn: <IoMenu className='text-3xl' /> ,
    menu_outline: <IoCloseOutline className='mx-4 my-auto text-3xl'/>,
};