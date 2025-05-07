import React from 'react'
import { useNavigate } from 'react-router'

export default function Header() {
    const navigate=useNavigate();
    const handleChange=(e)=>{
        navigate(e.target.value)

    }
  return (
    <div className='shadow-2xl  flex flex-col md:flex-row justify-around items-center p-6 m-6'>
        <h1 className='font-extrabold text-lg md:text-2xl m-8'>Your Gateway to Structured Learning</h1>
        <select defaultValue="Pick your course" className="select select-info" onChange={handleChange}>
            <option value={"/"}>Pick a your course</option>
            <option value={"/web"}>Web Development</option>
            <option>Automation Testing</option> 
            <option>Data Science</option>
            <option>Machine Learning</option>
            <option>UI/UX Design</option>
            <option>Cybersecurity</option>
            <option>Automation Testing</option>
            <option>Accessbility Testing</option>      
        </select>
        

      
    </div>
  )
}
