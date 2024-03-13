import React, { useState } from "react";
import {AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail} from "react-icons/ai"
import {GrProjects} from "react-icons/gr"
import {BsPerson} from "react-icons/bs"


const SideNav =() =>{
    const [nav, setNav] = useState(false); 
    const handleNav =() =>{
        setNav(!nav);
    };

    return(
        <div>
            <AiOutlineMenu onClick={handleNav} size={20} className="absolute top-4 right-4 z-[99] md:hidden" />
            {nav ? (
                <div className="fixed w-full h-screen flex flex-col justify-center items-center z-20">
                    <a onClick={handleNav} href="#main"
                    className="w-[75%]  p-4 m-2 flex justify-center items-center shadow-lg rounded-full bg-gray-100/90 shadow-gray-400  cursor-pointer hover:scale-110 duration-200 ease-in ">
                        <AiOutlineHome size={20}/>
                        <span className="pl-4">Home</span>
                    </a>
                    <a onClick={handleNav} href="#work"
                    className="w-[75%]  p-4 m-2 flex justify-center items-center shadow-lg rounded-full bg-gray-100 shadow-gray-400  cursor-pointer hover:scale-110 duration-200 ease-in ">
                        <GrProjects  size={20}/>
                        <span className="pl-4">Work</span>
                    </a>
                    <a onClick={handleNav} href="#projects"
                    className="w-[75%]  p-4 m-2 flex justify-center items-center shadow-lg rounded-full bg-gray-100 shadow-gray-400  cursor-pointer hover:scale-110 duration-200 ease-in ">
                        <AiOutlineProject size={20}/>
                        <span className="pl-4">Projects</span>
                    </a>
                    <a onClick={handleNav} href="#main"
                    className="w-[75%]  p-4 m-2 flex justify-center items-center shadow-lg rounded-full bg-gray-100 shadow-gray-400  cursor-pointer hover:scale-110 duration-200 ease-in ">
                        <BsPerson size={20}/>
                        <span className="pl-4">Resume</span>
                    </a>
                    <a onClick={handleNav} href="#contact"
                    className="w-[75%]  p-4 m-2 flex justify-center items-center shadow-lg rounded-full bg-gray-100 shadow-gray-400  cursor-pointer hover:scale-110 duration-200 ease-in ">
                        <AiOutlineMail size={20}/>
                        <span className="pl-4">Contact</span>
                    </a>
                </div>) : ('') }
                <div className=" md:block hidden fixed top-[25%] z-10 ">
                    <div className="flex flex-col">
                    <a href="#main" className="rounded-full shadow-lg shadow-gray-300 bg-gray-100 m-2 p-4 hover:scale-110 ease-in duration-300 cursor-pointer"> 
                    <AiOutlineHome size={20}/>
                    </a>
                    <a href="#work" className="rounded-full shadow-lg shadow-gray-300 bg-gray-100 m-2 p-4 hover:scale-110 ease-in duration-300 cursor-pointer"> 
                    <GrProjects  size={20}/>
                    </a>
                    <a href="#project" className="rounded-full shadow-lg shadow-gray-300 bg-gray-100 m-2 p-4 hover:scale-110 ease-in duration-300 cursor-pointer"> 
                    <AiOutlineProject size={20}/>
                    </a>
                    <a href="#main" className="rounded-full shadow-lg shadow-gray-300 bg-gray-100 m-2 p-4 hover:scale-110 ease-in duration-300 cursor-pointer"> 
                    <BsPerson size={20}/>
                    </a>
                    <a href="#contact" className="rounded-full shadow-lg shadow-gray-300 bg-gray-100 m-2 p-4 hover:scale-110 ease-in duration-300 cursor-pointer"> 
                    <AiOutlineMail size={20}/>
                    </a>
                    </div>
                </div>
        </div>
    )
}

export default SideNav