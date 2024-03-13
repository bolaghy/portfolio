import React from 'react'
import ProjectItem from './projectItem'
import pic1 from '../assets/pic1.png'
import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.png'
import pic4 from '../assets/pic4.png'
import pic5 from '../assets/pic5.png'


const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto  md:pl-20 p-4 py-16 '>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='py-8 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil earum, rem sapiente quidem quas perferendis.
        Quae consequuntur iusto deleniti quod inventore laudantium atque facilis deserunt quas quasi commodi, accusantium voluptatem?
      </p>
      <div className='grid grid-cols-2 gap-12'>
        <ProjectItem img={pic1} title='Twich app'/>
        <ProjectItem img={pic2} title='Streamming app'/>
        <ProjectItem img={pic3} title='E-commerce app'/>
        
        <ProjectItem img={pic4} title='Blog app'/>
        <ProjectItem img={pic5} title='Blog app'/>
        
      
      </div>
    
    </div>
  )
}

export default Projects

