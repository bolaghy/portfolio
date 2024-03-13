import React from 'react'
import WorkItem from './WorkItem'



const data = [
  {
    year: 2017,
    title: 'Content creator',
    duration:'3 Years',
    details: 
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quas temporibus natus aspernatur consectetur ullam, tempora enim nobis velit nostrum quaerat? Tenetur deleniti vero eaque ab deserunt? Fugit, consectetur hic?',
  },
  {
    year: 2020,
    title: 'Facebook',
    duration:'5 Years',
    details: 
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quas temporibus natus aspernatur consectetur ullam, tempora enim nobis velit nostrum quaerat? Tenetur deleniti vero eaque ab deserunt? Fugit, consectetur hic?',
  },
  {
    year: 2023,
    title: 'Google',
    duration:'4 Years',
    details: 
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quas temporibus natus aspernatur consectetur ullam, tempora enim nobis velit nostrum quaerat? Tenetur deleniti vero eaque ab deserunt? Fugit, consectetur hic?',
  },
  {
    year: 2024,
    title: 'Amazon',
    duration:'2 Years',
    details: 
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quas temporibus natus aspernatur consectetur ullam, tempora enim nobis velit nostrum quaerat? Tenetur deleniti vero eaque ab deserunt? Fugit, consectetur hic?',
  },
]

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto p-4 py-16 md:pl-20'>
      <h1 className='text-4xl font-bold text-center text-[001b5e]'>Work</h1>
      {data.map((item, idx)=>(
        <WorkItem 
        key={idx} 
        year={item.year}
        title={item.title}
        duration={item.duration}
        details={item.details}  />
      ))}
      
    </div>
  )
}

export default Work
 