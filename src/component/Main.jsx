import React from "react";
import { TypeAnimation } from 'react-type-animation';
import {FaTwitter,FaFacebookF,FaInstagram,FaLinkedinIn} from 'react-icons/fa';

const Main =() => {
    return(
        <div>
            <img className="w-full h-screen object-cover object-left scale-x-[-1] "
            src="https://images.unsplash.com/photo-1474418397713-7ede21d49118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwNjc4OTE1NQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" 
            alt="/" />
            <div className="w-full h-screen absolute top-0 left-0 bg-white/40">
            <div className="max-w-[700px] m-auto w-full h-full flex flex-col lg:items-start items-center justify-center">
                <h1 className="font-semibold sm:text-5xl text-4xl text-gray-800">I'm Bolaji Isaac</h1>
                <h2 className="pt-4 sm:text-2xl text-3xl font-semibold  text-gray-800 space-x-2"> 
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        "I'm a Developer",
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        "I'm a  Coder",
                        1000,
                        "I'm a Tech Enthusiast",
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{  fontSize: '1em', display: 'inline-block' }}
                    repeat={Infinity}
                    />
                </h2>
                <div className="flex justify-between max-w-[200px] w-full pt-6">
                    <FaTwitter className="cursor-pointer" size={20}/>
                    <FaFacebookF className="cursor-pointer" size={20}/>
                    <FaInstagram className="cursor-pointer" size={20}/>
                    <FaLinkedinIn className="cursor-pointer" size={20}/>
                </div>
            </div>

            </div>

        </div>
    )
}

export default Main;